import { useState } from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Projects from "./pages/projects"
import Tasks from "./pages/tasks"
import Calendar from "./pages/calendar";
import Clients from "./pages/clients";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Team from "./pages/team";
import Register from "./pages/register";
import Adminlayout from "./pages/Admin/adminlayout";
import AdminDashboard from "./pages/Admin/dashboard";
import UserDetails from "./pages/Admin/userDetails";
import AdminSettings from "./pages/Admin/settings";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/tasks" element={<Tasks/>} />
      <Route path="/calendar" element={<Calendar/>} />
      <Route path="/clients" element={<Clients/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Adminlayout />} >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="userDetails" element={<UserDetails />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;