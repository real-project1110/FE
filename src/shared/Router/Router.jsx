import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateGroup from "../../components/CreateGroup";
import Join from "../../pages/Join";
import Login from "../../pages/Login";
import Main from "../../pages/Main";
import Notice from "../../pages/Group/Notice";
import Schedule from "../../pages/Group/Schedule";
import Signin from "../../pages/Signin";
import Group from "../../pages/Group";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Join />} />
        <Route path="/main" element={<Main />}>
          <Route path="write" element={<CreateGroup />} />
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
