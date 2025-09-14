import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { route } from './route.const';

const RouteApp: React.FC = () => {
  return (
    <Routes>
      {route.map((item, index) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};
export default RouteApp;
