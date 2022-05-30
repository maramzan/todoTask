import React, { useState } from "react";
import { useRouter } from "next/router";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const router= useRouter();

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await fetch("/api/users/logout");

      router.push("/login");
    } catch (error) {
      console.log("Error white SignOut", error);
    } finally {
      setLoading(false);
    }
  };
  return {loading, handleSignOut};
};

export default useLogout;
