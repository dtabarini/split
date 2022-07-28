import React, { useState } from "react";
import Bill from "../../interfaces/Bill";
import Item from "../../interfaces/Item";
import ItemCard from "./ItemCard";
import styled from "styled-components";
import EditBill from "../EditBill/EditBill";

const IndentDiv = styled.div`
  margin-left: 10px;
`;
const PriceSpan = styled.span`
  margin: auto;
  float: right;
  margin-right: 100px;
`;

function Totals(props: { bill: Bill }) {
  const emptyItemArr: Item[] = [];
  const reversedDictionary = new Map<string, Item[]>();
  const unclaimedItems: Item[] = [];

  function reverseBill() {
    for (const item of props.bill.Items) {
      if (item.claimedBy.length === 0) {
        unclaimedItems.push(item);
      }
      for (const name of item.claimedBy!) {
        reversedDictionary.has(name)
          ? reversedDictionary.get(name)!.push(item)
          : reversedDictionary.set(name, [item]);
      }
    }
  }
  reverseBill();

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

  function getItemSplitCount(item: Item) {
    const itemIdx = props.bill.Items.indexOf(item);
    const length = props.bill.Items[itemIdx].claimedBy.length;
    return length;
  }
  return (
    <IndentDiv>
      {unclaimedItems.length > 0 && "Unclaimed items"}
      <IndentDiv>
        {unclaimedItems.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <PriceSpan> {item.price}</PriceSpan>
          </div>
        ))}
      </IndentDiv>

      {[...reversedDictionary.entries()].map(([name, items]) => (
        <div key={name}>
          {name}
          <IndentDiv>
            {items.map((item) => (
              <div key={item.id}>
                <span>
                  {getItemSplitCount(item) > 1 &&
                    "1/" + getItemSplitCount(item) + " "}
                  {item.name}{" "}
                </span>
                <PriceSpan> {item.price / getItemSplitCount(item)}</PriceSpan>
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
