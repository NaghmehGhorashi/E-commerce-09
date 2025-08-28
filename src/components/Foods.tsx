import React, { useEffect, useState } from 'react';
import { foodsApi, searchMeals } from '../services/productApi';
import { Link } from 'react-router-dom';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const Foods: React.FC = () => {
  const [data, setData] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoading(true);

    (searchTerm ? searchMeals(searchTerm) : foodsApi())
      .then((meals) => {
        setData(meals || []);
      })
      .catch((err) => {
        console.error('Error fetching meals:', err);
        setData([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchTerm]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetchData();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Foods</h1>

      {/* فرم جستجو */}
      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search meals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Search
        </button>
      </form>

      {/* نمایش لودینگ */}
      {isLoading && <p>Loading...</p>}

      {/* نمایش لیست غذاها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.length > 0
          ? data.map((meal) => (
              <Link to={`/Food/${meal.idMeal}`} key={meal.idMeal}>
                <div className="border rounded p-2">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h2 className="mt-2 font-semibold">{meal.strMeal}</h2>
                </div>
              </Link>
            ))
          : !isLoading && <p>No meals found.</p>}
      </div>
    </div>
  );
};

export default Foods;
