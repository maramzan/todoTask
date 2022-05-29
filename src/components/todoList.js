import { DeleteOutlined, ModeEditOutlined } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper, Typography } from "@mui/material";
import React from "react";

const TodoList = ({ items }) => {
  return (
    <>
      {items?.length > 0 && (
        <Paper elevation={2} sx={{ maxWidth: "500px", margin: "0 auto" }}>
          <List>
            {items?.map((todo, index) => (
              <ListItem key={index} divider={items?.length - 1 !== index}>
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                  <IconButton>
                    <ModeEditOutlined />
                  </IconButton>
                  <IconButton>
                    <DeleteOutlined />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};

export default TodoList;
