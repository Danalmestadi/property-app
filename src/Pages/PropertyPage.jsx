import React, { useState, useEffect, useCallback } from "react";
import fetchData from "../API/Propertyferch";
import PropertyList from "../Components/PropertyList";
import Navbar from "../Components/NavbarCp";

const PropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataAndUpdateState = useCallback(async () => {
    try {
      const data = await fetchData();
      setProperties(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDataAndUpdateState();
  }, [fetchDataAndUpdateState]);

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
