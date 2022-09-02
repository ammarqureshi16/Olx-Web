import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../Screen/Sign-Up";
import Login from "../Screen/Login";
import Home from "../Screen/Home-Page";
import Profile from "../Screen/User-Profile";
import UploadAdds from "../Components/Upload-Add/uploadAdds";
import AddsDetail from "../Screen/Adds-Detail";
import MyAdds from "../Components/My-Adds/myAdds";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/uploadAdds" element={<UploadAdds />} />
        <Route path="/addsDetail/:adIds" element={<AddsDetail />} />
        <Route path="/myAdds" element={<MyAdds />} />
      </Routes>
    </Router>
  );
}
