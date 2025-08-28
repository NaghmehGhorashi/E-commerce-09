import React from 'react';
import { useLocation } from 'react-router';

function test() {
  const a = useLocation();
  return (
    <div className={a.pathname === '/' ? 'bg-amber-50' : 'bg-amber-100'}></div>
    switch (key) {
      case value:
        
        break;
    
      default:
        break;
    }
    // <Routes>
    //   {A.map((a) => (
    //     <Route key={a.path} path={a.path} element={a.element} />
    //   ))}
    // </Routes>
  );
}

export default test;
