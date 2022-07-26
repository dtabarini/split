import React from 'react';
import logo from './logo.svg';
import Bill from '../../Interfaces/Bill'
import Item from '../../Interfaces/Item';

const testItem: Item = {
  name: "abc",
  price: 12,
  quantity: 1,
  isClaimed: false
}
const testItems: Item[] = 
  [testItem, testItem, testItem]

const example: Bill = {
  Id: "string",
  Items: testItems,
  ClaimedItems: testItems,
  Tax: 8.23,
  Tip: 3,
  PaymentProviderName: "string",
  PaymentInformation: "string", 
}

function ClaimBill() {
  return (
    <div>
     ClaimBillPage
     Pop
    </div>
  );
}

export default ClaimBill;