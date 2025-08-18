import axios from 'axios';

const client = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

export async function foodsApi() {
  const response = await client.get('/filter.php?c=Seafood');
  return response.data.meals;
}

  