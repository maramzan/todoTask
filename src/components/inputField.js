import { Box, Button, Paper, TextField } from "@mui/material";
import React from "react";

const InputField = ({ username, onInputChange,onUpdate }) => {
  return (
    <Box sx={{ maxWidth: "500px", margin: "0 auto" }}>
      <Box sx={{ p: 2, display: "flex" }}>
        <TextField sx={{ flexGrow: 1, px: 2 }} onChange={onInputChange} value={username} placeholder="Add todo here" />
        <Button sx={{ py: 2, px: 4 }} onClick={onUpdate} variant="contained">
          update
        </Button>
      </Box>
    </Box>
  );
};

export default InputField;
