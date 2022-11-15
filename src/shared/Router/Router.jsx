import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WriteGroup from "../../pages/WriteGroup";
import Join from "../../pages/Join";
import Login from "../../pages/Login";
import Main from "../../pages/Main";
import Notice from "../../pages/Notice";
import Schedule from "../../pages/Schedule";
import Group from "../../pages/Group";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Join />} />
        <Route path="/main" element={<Main />}>
          <Route path="write" element={<WriteGroup />} />
        </Route>
        <Route path="/group" element={<Group />}>
          <Route path=":id" element={<Schedule />} />
          <Route path=":id/notice" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
