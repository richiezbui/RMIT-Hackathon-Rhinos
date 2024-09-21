import React from 'react';

// Main Card component
export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="card">{children}</div>;
};

// CardHeader component
export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

// CardTitle component
export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="card-title">{children}</h2>;
};

// CardContent component
export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

// Default export
export default Card;