import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Header from "../../src/components/header";
import InputField from "../../src/components/inputField";
import TodoList from "../../src/components/todoList";

const Homepage = React.memo(({ inputValue, onInputChange, onInputKeyPress, onButtonClick }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  // const [jwt, setJwt] = useState('')

  const loguser = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:3000/api/users/login");
    const { data, id } = await res.json();

    if (data == "JWT Success") {
      setLoading(false);
    } else {
      router.push("/login");
    }
  };
  useEffect(() => {
    loguser();
  }, []);

  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <Header showSignIN={false} />
      <InputField />
      <TodoList items={["1", "2"]} />
    </>
  );
});

export default Homepage;
