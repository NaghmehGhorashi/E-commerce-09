import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { route } from './route.const';

const RoutApp: React.FC = () => {
  return (
    <Routes>
      {route.map((r, index) => (
        <Route key={index} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};

export default RoutApp;
