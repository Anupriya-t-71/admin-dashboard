import React from 'react';
import { UserPlus, FileText, TrendingUp, ArrowUpRight } from 'lucide-react';
import './QuickActions.css';

export default function QuickActions({ darkMode }) {
  const actions = [
    { label: "Add New User Account", icon: UserPlus, color: "#4f46e5", bg: "rgba(79, 70, 229, 0.1)" },
    { label: "Generate System Report", icon: FileText, color: "#059669", bg: "rgba(5, 150, 105, 0.1)" },
    { label: "View Extended Analytics", icon: TrendingUp, color: "#d97706", bg: "rgba(217, 119, 6, 0.1)" },
  ];

  return (
    <div className="actions-card-wrapper">
      <div>
        <h3>Quick Actions</h3>
        <p className="actions-description-p">Common system shortcuts configuration tasks.</p>
        
        <div className="actions-stack-container">
          {actions.map((act, i) => (
            <button key={i} className="action-row-btn">
              <div className="action-btn-left-side">
                <div className="action-icon-box" style={{ backgroundColor: act.bg, color: act.color }}>
                  <act.icon className="w-4 h-4" />
                </div>
                <span className="action-label-span">{act.label}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}
        </div>
      </div>
      
      <div className="actions-footer-status">
        System Status: <span className="system-status-green">All systems operational</span>
      </div>
    </div>
  );
}