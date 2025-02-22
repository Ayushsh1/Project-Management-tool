import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TaskManagement from "./components/TaskManagement";
import Dashboard from "./components/Dashboard";
import TeamCollaboration from "./components/TeamCollaboration";
import CalendarPage from "./components/CalendarPage";
import ProjectPage from "./components/ProjectPage";
import ReportsPage from "./components/ReportsPage";
import FilesPage from "./components/FilesPage";
import NotificationsPage from "./components/NotificationsPage"; 
import PStatistics from "./components/PStatistics";
import ChatPage from "./components/ChatPage";
import TeamGoals from "./components/TeamGoals"; 
import FileSharingPage from "./components/FileSharingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AssignTasks from "./components/AssignTasks";
import TrackProgress from "./components/TrackProgress";
import SetPriorities from "./components/SetPriorities";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskManagement />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/teams" element={<TeamCollaboration />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/files" element={<FilesPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/statistics" element={<PStatistics />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/team-goals" element={<TeamGoals />} />
      <Route path="/file" element={<FileSharingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/assignTasks" element={<AssignTasks />} />
      <Route path="/trackProgress" element={<TrackProgress />} />
      <Route path="/setPriorities" element={<SetPriorities />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Catch-all */}

    </Routes>
  );
}

export default App;
