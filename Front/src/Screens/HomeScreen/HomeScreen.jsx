import React from "react";
import { NavHeader, Header, MainUserCards, Reviews } from "../index.js";

const HomeScreen = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Header />
        <MainUserCards />
        <Reviews/>
      </main>
    </>
  );
};

export default HomeScreen;
