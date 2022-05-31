import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from '../../components/header'
import InputField from "../../components/inputField";
import useHomepage from "../../hooks/useHomepage";

const Homepage = React.memo(({ inputValue, onInputChange, onInputKeyPress, onButtonClick }) => {
  const router = useRouter();
  const { loading, userData, setUserData, logUser, updateUser } = useHomepage();

  useEffect(() => {
    logUser();
  }, []);

  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <Header showSignIN={false} />
      <InputField
        onUpdate={updateUser}
        onInputChange={(e) => setUserData({ ...userData, username: e.target.value })}
        username={userData?.username}
      />
    </>
  );
});

export default Homepage;
