import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards'
import ChartsSection from './components/ChartsSection';
import DataTable from './components/DataTable'
import QuickActions from './components/QuickActions'
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const recentActivity = [
    { id: 1, name: "Mohd Kaish", status: "Active", date: "2026-07-08", email: "kaish@gmail.com" },
    { id: 2, name: "Radhika Singh", status: "Active", date: "2026-07-07", email: "radhika@gmail.com" },
    { id: 3, name: "Krishna Sharma", status: "Completed", date: "2026-07-06", email: "krishna@gmail.com" },
    { id: 4, name: "Himanshu Maurya", status: "Pending", date: "2026-07-05", email: "himanshu@gmail.com" },
    { id: 5, name: "Harsh Burman", status: "Cancelled", date: "2026-07-04", email: "harsh@gmail.com" },
  ];

  const filteredActivity = recentActivity.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <Sidebar darkMode={darkMode} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="main-content-wrapper">
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          setSidebarOpen={setSidebarOpen} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <main className="dashboard-main">
            <div className="header-title-section">
              <h1>Overview Dashboard</h1>
              <p>Here is your live analytics data snapshot for today.</p>
            </div>

            <StatsCards darkMode={darkMode} />
            <ChartsSection darkMode={darkMode} />

            <div className="grid-3-1">
            <div className="table-area">
              <DataTable darkMode={darkMode} filteredActivity={filteredActivity} />
            </div>
            <div className="actions-area">
              <QuickActions darkMode={darkMode} />
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}