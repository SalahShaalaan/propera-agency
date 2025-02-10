
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getProperty(id) {
  const response = await fetch(`${BASE_URL}/api/properties/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result.data.details;
}
