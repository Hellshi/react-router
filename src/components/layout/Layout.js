import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavegation from "./MainNavegation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavegation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
