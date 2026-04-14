import React from 'react';

const DashboardCard = ({ title, value, icon }) => {
  const cardStyle = {
    background: '#1a1a1a',
    borderLeft: '4px solid #6200ee',
    color: '#e0e0e0',
    padding: '20px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
  };

  return (
    <div style={cardStyle}>
      <span style={{ fontSize: '0.8rem', color: '#888' }}>{icon} {title}</span>
      <h2 style={{ margin: '10px 0 0', letterSpacing: '1px' }}>{value}</h2>
    </div>
  );
};

export default DashboardCard;
