import axios from 'axios';

const client = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

export async function foodsApi() {
  const response = await client.get('/filter.php?c=Seafood');
  return response.data.meals;
}

export const foodApi = async (id) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    return response.data.meals[0];
  } catch (error) {
    console.error('Error fetching food:', error);
    throw error;
  }
};

export async function categoriesApi() {
  const response = await client.get('/categories.php');
  return response.data.categories;
}

export async function searchMeals(query) {
  const response = await client.get(`/search.php?s=${query}`);
  return response.data.meals;
}
