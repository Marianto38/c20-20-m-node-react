import React from "react";
import { NavHeader, Header, MainUserCards } from "../index.js";

const HomeScreen = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Header />
        <MainUserCards />
      </main>
    </>
  );
};

export default HomeScreen;
