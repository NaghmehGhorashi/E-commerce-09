import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {React.isValidElement(children)
        ? React.cloneElement(children, { searchTerm })
        : children}
      <Footer />
    </div>
  );
};

export default Layout;
