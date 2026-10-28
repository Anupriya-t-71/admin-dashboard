import React from 'react';
import { Search, Bell, Menu, Sun, Moon } from 'lucide-react';
import './Header.css';

export default function Header({ darkMode, setDarkMode, setSidebarOpen, searchQuery, setSearchQuery }) {
  return (
    <header className="header-tag">
      <div className="header-left">
        <button className="menu-toggle-btn" onClick={() => setSidebarOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="search-box-container">
          <Search className="search-icon-inside h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search users or status..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input-field"
          />
        </div>
      </div>

      <div className="header-right">
        <button onClick={() => setDarkMode(!darkMode)} className="header-action-btn">
          {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
        </button>

        <button className="header-action-btn">
          <Bell className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          <span className="notification-badge"></span>
        </button>

        <div className="profile-divider-section">
          <img src="./Kaish.jpeg" alt="Avatar" className="profile-img-avatar" />
          <div className="profile-info-text">
            <span className="profile-name-span">Mohd Kaish</span>
            <span className="profile-role-span">Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}