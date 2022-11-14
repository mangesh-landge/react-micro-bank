import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./pages/SignUp";
import Dashboard from "./pages/DashBoard";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Navbar from "./components/navBar";
import AppRoute from "./Routes/routes";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Navbar /> */}
      <AppRoute />
    </div>
  );
}

export default App;
