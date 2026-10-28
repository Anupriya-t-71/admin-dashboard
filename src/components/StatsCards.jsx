import React from 'react';
import { Users, DollarSign, Activity, CheckCircle, ArrowUpRight } from 'lucide-react';
import './StatsCards.css';

export default function StatsCards({ darkMode }) {
  const stats = [
    { title: "Total Users", value: "24,512", growth: "+12.5%", icon: Users, color: "#2563eb", bg: "rgba(37, 99, 235, 0.1)" },
    { title: "Total Revenue", value: "$48,250", growth: "+8.2%", icon: DollarSign, color: "#059669", bg: "rgba(5, 150, 105, 0.1)" },
    { title: "Active Sessions", value: "1,842", growth: "+21.0%", icon: Activity, color: "#d97706", bg: "rgba(217, 119, 6, 0.1)" },
    { title: "Tasks Completed", value: "92%", growth: "+4.3%", icon: CheckCircle, color: "#4f46e5", bg: "rgba(79, 70, 229, 0.1)" },
  ];

  return (
    <div className="stats-grid-container">
      {stats.map((stat, i) => (
        <div key={i} className="stat-card-item">
          <div className="stat-card-top-row">
            <span className="stat-card-title">{stat.title}</span>
            <div className="stat-icon-badge" style={{ backgroundColor: stat.bg, color: stat.color }}>
              <stat.icon className="w-5 h-5" />
            </div>
          </div>
          <div className="stat-card-bottom-row">
            <h3 className="stat-card-value">{stat.value}</h3>
            <span className="stat-growth-badge">
              {stat.growth} <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}