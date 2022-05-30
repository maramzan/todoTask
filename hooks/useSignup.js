import React, { useState } from "react";
import { useRouter } from "next/router";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const clearFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleSignup = async (e) => {
    setLoading(true);
    e.preventDefault();

    const user = {
      email,
      username,
      password,
    };

    try {
      let res = await fetch("/api/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      res = await res.json();

      if (res?.user?.email) {
        clearFields();
        router.push("/login");
        setLoading(false);
      } else {
        alert(res?.message || "something went wrong");
        setLoading(false);
      }
    } catch (error) {
      alert(error?.message || "something went wrong");
      setLoading(false);
    }finally{
      setLoading(false)
    }
  };

  return { loading, email, password, username, setUsername, setEmail, setPassword, handleSignup };
};

export default useSignup;
