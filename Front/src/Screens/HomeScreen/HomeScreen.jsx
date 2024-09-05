import React from "react";
import { NavHeader, Header, MainUserCards, Matching } from "../index.js";

const HomeScreen = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Header />
        <MainUserCards />
        <Matching/>
      </main>
    </>
  );
};

export default HomeScreen;
