import React from 'react';
import './DataTable.css';

export default function DataTable({ darkMode, filteredActivity }) {
  return (
    <div className="table-card-wrapper">
      <div className="table-card-header">
        <h3>Recent User Accounts</h3>
        <span className="table-results-badge">
          Showing {filteredActivity.length} results
        </span>
      </div>
      
      <div className="table-responsive-container">
        <table className="dashboard-table-element">
          <thead>
            <tr className="table-header-row">
              <th className="pb-3">Name</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Date</th>
              <th className="pb-3 text-right-align">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredActivity.map((row) => (
              <tr key={row.id} className="table-body-row">
                <td className="table-cell-padding">
                  <div className="cell-name-bold">{row.name}</div>
                  <div className="cell-email-sub">{row.email}</div>
                </td>
                <td className="table-cell-padding">
                  <span className={`status-pill-badge 
                    ${row.status === 'Active' || row.status === 'Completed' ? 'status-active' : ''}
                    ${row.status === 'Pending' ? 'status-pending' : ''}
                    ${row.status === 'Cancelled' ? 'status-cancelled' : ''}
                  `}>
                    {row.status}
                  </span>
                </td>
                <td className="table-cell-padding" style={{ color: darkMode ? '#cbd5e1' : '#334155' }}>{row.date}</td>
                <td className="table-cell-padding text-right-align">
                  <button className="action-manage-btn">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}