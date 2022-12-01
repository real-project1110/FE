import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateGroup from "../../components/CreateGroup";
import Login from "../../pages/Login";
import Main from "../../pages/Main";
import Notice from "../../pages/Group/Posts";
import Schedule from "../../pages/Group/Schedule";
import Signin from "../../pages/Signin";
import Group from "../../pages/Group";
import Signup from "../../pages/Signup";
import Chats from "../../pages/Group/Chats";
import KakaoLogin from "../../pages/Social/KakaoLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/auth/kakao/callback" element={<KakaoLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />}>
          <Route path="write" element={<CreateGroup />} />
        </Route>
        <Route path="/groups" element={<Group />}>
          <Route path=":groupId" element={<Schedule />} />
          <Route path=":groupId/posts" element={<Notice />} />
          <Route path=":groupId/chats/:groupUserId" element={<Chats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
