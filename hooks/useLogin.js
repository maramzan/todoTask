import React, { useState } from "react";
import { useRouter } from "next/router";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const user = {
        email: email,
        password: password,
      };

      let res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      res = await res.json();

      if (res?.data == "success") {
        router.push("/homepage");
        setLoading(false);
      } else {
        alert("User Not Found");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error white SignOut", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, email, password, setEmail, setPassword, loginHandler };
};

export default useLogin;
