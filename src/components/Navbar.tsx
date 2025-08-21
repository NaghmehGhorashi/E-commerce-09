import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <nav className="flex justify-between items-center  text-yellow-200 px-6 h-16 relative z-50 mb-5">
        {/* Logo */}
        <Link className="hover:text-white" to="/">
          <h1 className="text-xl font-bold">Taste of the World</h1>
        </Link>

        {/* Links */}
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-6 list-none absolute md:static top-16 left-0 w-full md:w-auto bg-green-900 md:bg-transparent text-center md:text-left p-4 md:p-0`}
        >
          <li>
            {/* <Link className="hover:text-white" to="/about">
              Contact
            </Link> */}
          </li>
        </ul>

        {/* Search + Profile + Cart */}
        <div className="hidden md:flex items-center gap-4">
          <input
            type="search"
            placeholder="Search"
            className="rounded bg-amber-50 px-2 py-1 w-48 text-red-800 "
          />
          <p className="cursor-pointer">Profile</p>
          {/* <p className="cursor-pointer">Cart</p> */}
        </div>

        {/* Burger Menu */}
        <button
          className="md:hidden text-yellow-200 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>
    </Container>
  );
};

export default Navbar;
