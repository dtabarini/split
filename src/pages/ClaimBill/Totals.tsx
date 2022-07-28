import React, { useState } from "react";
import Bill from "../../interfaces/Bill";
import Item from "../../interfaces/Item";
import ItemCard from "./ItemCard";
import styled from "styled-components";
import EditBill from "../EditBill/EditBill";

function Totals(props: { bill: Bill }) {
  const emptyItemArr: Item[] = [];
  // const useState;
  const reversedDictionary = new Map<string, Item[]>();

  const IndentDiv = styled.div`
    margin-left: 10px;
  `;
  const PriceSpan = styled.span`
    margin: auto;
    float: right;
    margin-right: 100px;
  `;

  function reverseBill() {
    for (const item of props.bill.Items) {
      console.log(item);
      if (item.claimedBy?.length === 0) {
        reversedDictionary.has("unclaimed")
          ? reversedDictionary.get("unclaimed")!.push(item)
          : reversedDictionary.set("unclaimed", [item]);
      }
      for (const name of item.claimedBy!) {
        reversedDictionary.has(name)
          ? reversedDictionary.get(name)!.push(item)
          : reversedDictionary.set(name, [item]);
      }
    }
    console.log(reversedDictionary);
  }
  reverseBill();
  console.log(...reversedDictionary.keys());

  function calculateItemsTotal(items: Item[]) {
    let total = 0;
    items.forEach((item) => {
      total += item.price / items.length;
    });
    return total;
  }

  function calculateTax(items: Item[]) {
    const itemsTotal = calculateItemsTotal(items);
    const unroundedTotal = (itemsTotal / props.bill.Total) * props.bill.Tax;
    return round(unroundedTotal);
  }

  function calculateTip(items: Item[]) {
    const itemsTotal = calculateItemsTotal(items);
    const unroundedTip = (itemsTotal / props.bill.Total) * props.bill.Tip;
    return round(unroundedTip);
  }

  function calculateFinalTotal(items: Item[]) {
    const itemsTotal = calculateItemsTotal(items);
    return round(itemsTotal + calculateTax(items) + calculateTip(items));
  }

  function round(n: number) {
    return Math.round(n * 100) / 100;
  }
  return (
    <IndentDiv>
      {[...reversedDictionary.entries()].map(([name, items]) => (
        <div key={name}>
          {name}
          <IndentDiv>
            {items.map((item) => (
              <div>
                <span>
                  {items.length > 1 && "1/" + items.length + " "}
                  {item.name}{" "}
                </span>
                <PriceSpan> {item.price / items.length}</PriceSpan>
              </div>
            ))}
            <div>
              <span>{"Tax"} </span>
              <PriceSpan>{calculateTax(items)}</PriceSpan>
            </div>
            <div>
              <span>{"\nTip"} </span>
              <PriceSpan>{calculateTip(items)}</PriceSpan>
            </div>
            <div>
              <span>{"\nTotal"} </span>
              <PriceSpan>{calculateFinalTotal(items)} </PriceSpan>
            </div>
          </IndentDiv>
        </div>
      ))}
    </IndentDiv>
  );
}

export default Totals;
