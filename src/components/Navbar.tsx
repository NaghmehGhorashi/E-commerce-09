import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { searchMeals } from '../services/productApi';

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // تابع انتخاب یک پیشنهاد
  const handleSelect = (mealName: string) => {
    setSearchTerm(mealName);
    setSuggestions([]);
  };

  // هر بار که searchTerm تغییر می‌کنه
  useEffect(() => {
    if (searchTerm.length > 0) {
      searchMeals(searchTerm)
        .then((meals) => setSuggestions(meals || []))
        .catch(() => setSuggestions([]));
    }
  }, [searchTerm]);

  return (
    <Container>
      <nav className="flex justify-between items-center text-amber-100 px-6 h-16 relative z-50 mb-5">
        {/* Logo */}
        <Link className="text-cyan-50" to="/">
          <h1 className="text-xl font-bold">Taste of the World</h1>
        </Link>

        {/* Search + Profile */}
        <div className="relative flex items-center gap-4">
          <input
            type="search"
            placeholder="Search meals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded bg-amber-50 px-2 py-1 w-55 text-neutral-800"
          />

          {/* لیست پیشنهادها */}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 top-full w-55 bg-neutral-500 text-black rounded shadow mt-1 z-50 max-h-60 overflow-auto">
              {suggestions.slice(0, 5).map((meal) => (
                <Link to={`/Food/${meal.idMeal}`}>
                  <li
                    key={meal.idMeal}
                    onClick={() => handleSelect(meal.strMeal)}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {meal.strMeal}
                  </li>
                </Link>
              ))}
            </ul>
          )}

          <p className="cursor-pointer hidden md:block">Profile</p>
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
