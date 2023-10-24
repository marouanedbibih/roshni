import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

function AdminLayout() {
  const { user, token, role, setUser, _setToken, _setRole } = useStateContext();
  const roleInt = parseInt(role);
  if (!token || roleInt !== 1) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar  />
        <main className="px-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
