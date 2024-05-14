const fetchData = async () => {
  try {
    const response = await fetch(
      "https://6643af396c6a6565870807bf.mockapi.io/api/v1/property"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default fetchData;
