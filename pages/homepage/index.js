import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Header from "../../src/components/header";
import InputField from "../../src/components/inputField";
import TodoList from "../../src/components/todoList";
import useHomepage from "../../hooks/useHomepage";

const Homepage = React.memo(({ inputValue, onInputChange, onInputKeyPress, onButtonClick }) => {
  const router = useRouter();
  const { loading, userData, setUserData, logUser, updateUser } = useHomepage();

  // console.log("userData",userData)
  

  useEffect(() => {
    logUser();
  }, []);

  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <Header showSignIN={false} />
      <InputField onUpdate={updateUser} onInputChange={(e)=>setUserData({...userData, username: e.target.value})} username={userData?.username} />
      {/* <TodoList items={["1", "2"]} /> */}
    </>
  );
});

export default Homepage;
