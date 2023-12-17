
import React from "react";
import { HeaderComponents } from "../../components";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <HeaderComponents />
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;

