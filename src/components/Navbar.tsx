import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <nav className="flex justify-between items-center text-black px-6 h-16 relative z-50 mb-5">
        {/* Logo */}
        <Link className="text-cyan-50" to="/">
          <h1 className="text-xl font-bold">Taste of the World</h1>
        </Link>

        {/* Search + Profile */}
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-6 list-none absolute md:static top-16 left-0 w-full md:w-auto bg-amber-100 md:bg-transparent text-center md:text-left p-4 md:p-0`}
        >
          <input
            type="search"
            placeholder="Search meals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded bg-amber-50 px-2 py-1 w-48 text-neutral-800 mx-auto"
          />
          <p className="cursor-pointer">Profile</p>
        </ul>

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
