import React, { useState } from "react";
import Item from "../../interfaces/Item";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Bill from "../../interfaces/Bill";
import AddUserButton from "./AddUserButton";

export interface IItemCard {
  item: Item;
  currentUser: string;
  bill: Bill;
  itemIdx: number;
  users: string[];
  setUsers: React.Dispatch<React.SetStateAction<string[]>>;
  setBill: React.Dispatch<React.SetStateAction<Bill>>;
}
const ItemNameTitle = styled.span`
  text-align: left;
`;

const PriceTitle = styled.span`
  float: right;
`;
const NameSpan = styled.span``;

const Card: any = styled("div")<{ active: boolean }>`
  margin: auto;
  text-align: left;
  border-bottom: 0.1px solid black;
  min-height: 50px;
  ${(props) =>
    props.active &&
    `
    background: #ededfb;
    `};
`;

function ItemCard(props: IItemCard) {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    if (active) {
      props.item.claimedBy.delete(props.currentUser);
    } else {
      props.item.claimedBy.add(props.currentUser);
    }
    props.setBill({ ...props.bill });
    setActive(!active);
  };

  return (
    <Card active={active} onClick={handleClick}>
      <ItemNameTitle>{props.item.name}</ItemNameTitle>
      <PriceTitle>{"$" + props.item.price}</PriceTitle>
      <Stack direction="row" spacing={2}>
        {[...props.item.claimedBy].map((name) => (
          <NameSpan key={name}>{name}</NameSpan>
        ))}
        <AddUserButton {...props} />
      </Stack>
    </Card>
  );
}

export default ItemCard;
