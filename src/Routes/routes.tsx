import { PropsWithChildren, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../pages/DashBoard";
import Login from "../pages/Login";
import CreateAccount from "../pages/SignUp";
import EditProfile from "../pages/EditProfile";

function PrivateRoute({ children }: PropsWithChildren<{}>) {
  const { isAuth } = useSelector((state: any) => state?.login);
  return isAuth ? (children as JSX.Element) : <Navigate to="/login" />;
}

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-account"
          element={
            <PrivateRoute>
              <CreateAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
