import axios from 'axios';

const client = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

export async function foodsApi() {
  const response = await client.get('/filter.php?c=Seafood');
  return response.data.meals;
} 

export async function foodApi(id) {
  const respond = await client.get(`filter.php?c=Seafood/${id}`)
  return respond  
}
export async function foodsApi() {
  const response = await client.get('categories.php');
  return response.data.meals;
} 
