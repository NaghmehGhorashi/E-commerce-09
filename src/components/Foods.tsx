import React, { useEffect, useState } from 'react';
import { foodsApi, searchMeals } from '../services/productApi';
import { Link } from 'react-router-dom';
import Container from './Container';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface FoodsProps {
  searchTerm: string;
}

const Foods: React.FC<FoodsProps> = ({ searchTerm }) => {
  const [data, setData] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="p-5">
      <Container>
        <h1 className="text-2xl font-bold mb-4 text-amber-100 text-center">
          Foods
        </h1>

        {isLoading && <p>Loading...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.length > 0
            ? data.map((meal) => (
                <Link to={`/Food/${meal.idMeal}`} key={meal.idMeal}>
                  <div className="border rounded p-2">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-30 gap-2 object-cover rounded"
                    />
                    <h2 className="mt-2 font-semibold text-amber-50 text-center">
                      {meal.strMeal}
                    </h2>
                  </div>
                </Link>
              ))
            : !isLoading && <p>No meals found.</p>}
        </div>
      </Container>
    </div>
  );
};

export default Foods;
