// apiService.js

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData() {
  try {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export { fetchData };
