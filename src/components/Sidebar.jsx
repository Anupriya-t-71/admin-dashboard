import React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings, LogOut, X } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ darkMode, sidebarOpen, setSidebarOpen }) {
  return (
    <aside className={`sidebar-aside ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-logo-section">
        <div className="sidebar-logo">
          <LayoutDashboard className="w-6 h-6" />
          <span>Admin</span>
        </div>
        <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="sidebar-nav">
        {[
          { name: 'Dashboard', icon: LayoutDashboard, active: true },
          { name: 'Users', icon: Users },
          { name: 'Analytics', icon: BarChart3 },
          { name: 'Settings', icon: Settings },
        ].map((item) => (
          <a 
            key={item.name} 
            href="#" 
            className={`sidebar-link ${item.active ? 'active' : ''}`}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}