import React from "react";
import Header from '../../src/components/header'
import InputField from "../../src/components/inputField";
import TodoList from "../../src/components/todoList";

const Homepage = React.memo(
  ({ inputValue, onInputChange, onInputKeyPress, onButtonClick }) => (
      <>
      <Header />
      <InputField />
      <TodoList items={['1','2']} />
    {/* <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={8} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo here"
            // value={inputValue}
            // onChange={onInputChange}
            // onKeyPress={onInputKeyPress}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={onButtonClick}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper> */}
    </>
  )
);

export default Homepage;
