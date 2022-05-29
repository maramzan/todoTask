import { List, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

const TodoList = ({items}) => {
  return (
    <>
    {items?.length > 0 && (
      <Paper sx={{ maxWidth: "500px", margin: "0 auto" }}>
        <List >
          {items?.map((todo, idx) => (
              <ListItemText key={idx} primary={todo} />
            // <Typography variant='body2'>hello</Typography>
            // <TodoListItem
            //   {...todo}
            //   key={`TodoItem.${idx}`}
            //   divider={idx !== items.length - 1}
            //   onButtonClick={() => onItemRemove(idx)}
            //   onCheckBoxToggle={() => onItemCheck(idx)}
            // />
          ))}
        </List>
      </Paper>
    )}
  </>
  )
}

export default TodoList