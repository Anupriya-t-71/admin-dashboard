import React from "react";
import "./ChartsSection.css";

export default function ChartsSection({ darkMode }) {
  return (
    <div className="charts-grid-container">
      {/* Line Chart */}
      <div className="chart-card-box">
        <div className="chart-card-header">
          <h3>Monthly Revenue Trends</h3>
          <span className="chart-card-subtext">Jan - Jun 2026</span>
        </div>
        {/* src/components/ChartsSection.jsx ke andar Line Chart ka code */}
        <div className="line-chart-area">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
          >
            {/* curve path definition matches fine */}
            <path
              d="M 0 80 Q 100 40 200 60 T 400 20 T 490 30"
              fill="none"
              stroke="#4f46e5"
              strokeWidth="4"
            />
          </svg>
          <div className="line-chart-x-axis">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="chart-card-box">
        <div className="chart-card-header">
          <h3>Weekly Engagement</h3>
          <span className="chart-card-subtext">Activity Level</span>
        </div>
        <div className="bar-chart-container">
          {[40, 75, 50, 90, 65, 85, 45].map((height, idx) => (
            <div key={idx} className="bar-column-group">
              <div className="bar-bg-track">
                <div
                  style={{ height: `${height}%` }}
                  className="bar-fill-color"
                />
              </div>
              <span className="bar-x-label">
                {["M", "T", "W", "T", "F", "S", "S"][idx]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
