export const fetchProperties = async (option = {}) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // Dynamic query for flexiblilty and reusablility
    const queryParams = new URLSearchParams(option).toString();
    const response = await fetch(
      `http://localhost:5000/api/properties?${queryParams}`,
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
