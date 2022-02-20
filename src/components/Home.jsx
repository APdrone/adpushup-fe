import React from "react";
// import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import UserRoutes from "./UserRoutes";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Navigation />
        <BrowserRouter>
          <UserRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Home;
