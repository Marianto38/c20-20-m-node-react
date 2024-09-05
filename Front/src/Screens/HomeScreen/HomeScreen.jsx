import React from "react";
import { NavHeader, Header, MainUserCards, Footer } from "../index.js";

const HomeScreen = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Header />
        <MainUserCards />
      </main>
      <Footer />
    </>
  );
};

export default HomeScreen;
