import React, { useState, useEffect } from "react";
import PropertyList from "../Components/PropertyList";
import Navbar from "../Components/NavbarCp";

const PropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6643af396c6a6565870807bf.mockapi.io/api/v1/property"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if necessary
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen ">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-8">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <PropertyList properties={properties} />
        )}
      </div>
    </div>
  );
};

export default PropertyPage;
