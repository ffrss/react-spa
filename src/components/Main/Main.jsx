import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../index.css";
import { Home } from "../Home/Home";
import { Auth } from "../Auth/Auth";
import Layout from "../ui/layout/Layout";
import Browse from "../Browse/Browse";

export const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          {!isLoggedIn && (
            <Route
              path="/login"
              element={
                <Auth isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              }
            />
          )}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};
