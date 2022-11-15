import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Group from "../../pages/Group";
import Login from "../../pages/Login";
import Join from "../../pages/Join";
import Main from "../../pages/Main";
import Notice from "../../pages/Notice";
import Schedule from "../../pages/Schedule";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Join />} />
        <Route path="/main" element={<Main />} />
        <Route path="/group" element={<Group />} />
        <Route path="/group/:id" element={<Schedule />} />
        <Route path="/group/:id/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
