import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//import Button from '@mui/material/core/Button';

function LandingPage() {
  const [codeNotFound, setCodeNotFound] = useState<boolean>(false);
  const handleClick = () => {
    setCodeNotFound(!codeNotFound);
  };
  return (
    <div className="test">
      Landing page
      <Stack spacing={2}>
        <Button variant="contained">Create</Button>
        <Button variant="outlined">Join</Button>
      </Stack>
    </div>
  );
}

export default LandingPage;
