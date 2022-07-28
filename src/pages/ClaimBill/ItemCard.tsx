import React, { useState } from "react";
import Item from "../../interfaces/Item";
import styled from "styled-components";
import Stack from "@mui/material/Stack";

const Card = styled.div`
  margin: auto;
  text-align: left;
  border-bottom: 0.1px solid black;
`;

const ItemNameTitle = styled.span`
  text-align: left;
`;

const PriceTitle = styled.span`
  float: right;
`;

const NameSpan = styled.span``;

const handleClick = () => {
  console.log("clicked1");
};

function ItemCard(props: { item: Item }) {
  const clicked = useState<boolean>(false);
  const Card = styled.div`
    margin: auto;
    text-align: left;
    border-bottom: 0.1px solid black;
  `;

  return (
    <Card onClick={handleClick}>
      <ItemNameTitle>{props.item.name}</ItemNameTitle>
      <PriceTitle>{"$" + props.item.price}</PriceTitle>
      <Stack direction="row" spacing={2}>
        {props.item.claimedBy?.map((name) => (
          <NameSpan key={name}>{name}</NameSpan>
        ))}
      </Stack>
    </Card>
  );
}

export default ItemCard;
