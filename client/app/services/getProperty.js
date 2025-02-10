export async function getProperty(id) {
  const response = await fetch(`http://localhost:5000/api/properties/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result.data.details;
}
