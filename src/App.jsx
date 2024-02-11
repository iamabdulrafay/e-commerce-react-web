import React from "react";
import Header from "./components/Navbar";
import ContextApiProvider from "./context/ContextApiProvider";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ContextApiProvider>
        <Header />
        <Outlet />
        <Footer />
      </ContextApiProvider>
    </>
  );
};

export default App;
