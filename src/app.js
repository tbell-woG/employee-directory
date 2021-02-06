import React from "react";
import "./app.css";
import Header from "./components/header";
import EmployeesContainer from "./components/container/employee-container";

const app = () => {
  return (
    <>
      <Header />
      <EmployeesContainer />
    </>
  );
};

export default app;
