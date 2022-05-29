import { Box, Button, Paper, TextField } from "@mui/material";
import React from "react";

const InputField = () => {
  return (
    <Box sx={{ maxWidth: "500px", margin: "0 auto" }}>
      <Box sx={{ p: 2, display: "flex" }}>
        <TextField sx={{ flexGrow: 1, px:2 }} placeholder="Add todo here" />
        <Button sx={{ py: 2, px: 4 }} variant="contained">
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default InputField;
