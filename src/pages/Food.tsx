import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { foodApi } from '../services/productApi';

interface FoodData {
  idMeal: string;
  strMeal: string;
  strCategory?: string;
  strInstructions?: string;
  strMealThumb?: string;
  strYoutube?: string;
  strTags?: string;
}

const Food: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<FoodData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      foodApi(id)
        .then((food) => {
          setData(food);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found.</p>;

  return (
    <article className="p-6">
      <h2 className="text-2xl font-bold mb-4">{data.strMeal}</h2>
      {data.strMealThumb && (
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className="w-full max-w-md mb-4 rounded"
        />
      )}
      <p className="mb-4">{data.strInstructions}</p>
      {data.strYoutube && (
        <a
          href={data.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Watch on YouTube
        </a>
      )}
    </article>
  );
};

export default Food;
