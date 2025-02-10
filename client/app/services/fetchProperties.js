const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const dynamic = 'force-dynamic'

export const fetchProperties = async (option = {}) => {
  try {
    // Dynamic query for flexiblilty and reusablility
    const queryParams = new URLSearchParams(option).toString();
    const response = await fetch(
      `${BASE_URL}/api/properties?${queryParams}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data || !data.data) {
      throw new Error("Invalid data structure received from the API");
    }
    return data.data;
  } catch (error) {
    console.error("Error fetching properties:", error.message);
  }
};
