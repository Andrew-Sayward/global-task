
async function getCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const categories = await response.json();
  return categories;
}

export default getCategories;