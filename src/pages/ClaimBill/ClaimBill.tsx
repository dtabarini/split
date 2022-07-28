import React, { useState } from "react";
import logo from "./logo.svg";
import Item from "../../interfaces/Item";
import Bill from "../../interfaces/Bill";
import ItemCard from "./ItemCard";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Hash } from "crypto";
import Totals from "./Totals";

let testItem1: Item = {
  id: "1",
  name: "Pad Thai",
  price: 12,
  quantity: 1,
  claimedBy: [],
};
let testItem2: Item = {
  id: "2",
  name: "Green Curry",
  price: 14,
  quantity: 1,
  claimedBy: [],
};
let testItem3: Item = {
  id: "3",
  name: "Fried Rice",
  price: 12,
  quantity: 1,
  claimedBy: [],
};

let testItem4: Item = {
  id: "4",
  name: "Singh ha",
  price: 25,
  quantity: 1,
  claimedBy: [],
};
let testItem5: Item = {
  id: "5",
  name: "Red Curry",
  price: 14,
  quantity: 1,
  claimedBy: [],
};
let testItem6: Item = {
  id: "6",
  name: "Drunken Noodles",
  price: 12,
  quantity: 1,
  claimedBy: [],
};

const testBill: Bill = {
  Id: "string",
  Items: [testItem1, testItem2, testItem3, testItem4, testItem5, testItem6],
  Tax: 0.0823,
  Total: 38,
  Tip: 3,
  PaymentProviderName: "string",
  PaymentInformation: "string",
};

const NameTitle = styled.div`
  margin: auto;
  text-align: center;
`;
const Title = styled.div`
  margin: auto;
  text-align: left;
`;

function ClaimBill() {
  const [currentUser, setCurrentUser] = useState<string>("Dylan");
  const [bill, setBill] = useState<Bill>(testBill);
  const [users, setUsers] = useState<string[]>([
    "Dylan",
    "Tanya",
    "Trisha",
    "Aidan",
    "Will",
  ]);

  function hc() {
    setBill({ ...bill });
  }

  return (
    <div>
      <NameTitle>{"Hey, " + currentUser}</NameTitle>
      <NameTitle>{"Select items for yourself"}</NameTitle>
      <NameTitle>{"Press '+' to assign for others"}</NameTitle>
      <Title>Items</Title>
      {bill.Items.map((item, idx) => (
        <ItemCard
          key={idx}
          item={item}
          setBill={setBill}
          currentUser={currentUser}
          bill={bill}
          itemIdx={idx}
          users={users}
          setUsers={setUsers}
        />
      ))}
      <Title>Totals</Title>
      {<Totals bill={bill}></Totals>}
    </div>
  );
}

export default ClaimBill;
