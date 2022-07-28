import React, { useState } from "react";
import Item from "../../interfaces/Item";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Bill from "../../interfaces/Bill";

interface IAddUserButton {
  item: Item;
  bill: Bill;
  users: string[];
  setUsers: React.Dispatch<React.SetStateAction<string[]>>;
  setBill: React.Dispatch<React.SetStateAction<Bill>>;
}

function AddUserButton(props: IAddUserButton) {
  function handleButton(event: any, name: string) {
    event.stopPropagation();
    props.item.claimedBy.add(name);
    props.setBill({ ...props.bill });
    setAnchorEl(null);
  }

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button onClick={handleClick}>+</button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {props.users.map((name) => (
          <button key={name} onClick={(e) => handleButton(e, name)}>
            {name}
          </button>
        ))}
      </Popover>
    </div>
  );
}

export default AddUserButton;
