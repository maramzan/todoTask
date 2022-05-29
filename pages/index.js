import React from "react";
import Landing from "./landing";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Landing />
    </div>
  );
}
