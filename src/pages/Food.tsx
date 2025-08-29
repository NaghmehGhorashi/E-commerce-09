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
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
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
    <article className=" md:mx-20 bg-neutral-800 rounded-3xl ">
      <h2 className="text-2xl font-bold text-amber-50 text-center mb-4 md:pt-5">
        {data.strMeal}
      </h2>
      <div className="flex md:flex-row flex-col md:ml-20 ">
        {data.strMealThumb && (
          <img
            src={data.strMealThumb}
            alt={data.strMeal}
            className="w-full max-w-md mb-4 rounded-3xl "
          />
        )}
        <div className="md:ml-30 text-xl md:mt-20">
          <p className="mb-4 text-2xl text-amber-50">Ingridiant :</p>
          <p className="mb-4  text-amber-50">1. {data.strIngredient1}</p>
          <p className="mb-4  text-amber-50">2. {data.strIngredient2}</p>
          <p className="mb-4  text-amber-50">3. {data.strIngredient3}</p>
          <p className="mb-4  text-amber-50">4. {data.strIngredient4}</p>
          <p className="mb-4  text-amber-50">5. {data.strIngredient5}</p>
          <p className="mb-4  text-amber-50">6. {data.strIngredient6}</p>
          <p className="mb-4  text-amber-50">7. {data.strIngredient7}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:mt-2">
        <div className="md:w-6/12">
          <p className="mb-4 text-amber-50 md:ml-20">{data.strInstructions}</p>
        </div>

        {data.strYoutube && (
          <div className="mt-4 md:mx-auto   ">
            <iframe
              src={`https://www.youtube.com/embed/${data.strYoutube.split('v=')[1]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl shadow-lg md:w-[580px] md:h-[280px] sm:w-[60px] sm:ml-auto "
            ></iframe>
          </div>
        )}
      </div>
    </article>
  );
};

export default Food;
