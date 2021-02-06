import React from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeesContainer from "./components/Container/EmployeesContainer";

const app = () => {
  return (
    <>
      <Header />
      <EmployeesContainer />
    </>
  );
};

export default app;
