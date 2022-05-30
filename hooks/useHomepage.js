import React, { useState } from "react";

const useHomepage = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const logUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/users", {
        method: "GET",
      });
      const { data, user } = await res.json();
      setUserData(user);

      if (data == "JWT Success") {
        setLoading(false);
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.log("error white updaging", error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userData?.username }),
      });
      const data = res.json();
      console.log(data);

    } catch (error) {
      setLoading(false);
      console.log("error white updaging", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, userData, setUserData, logUser, updateUser };
};

export default useHomepage;
