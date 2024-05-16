import React, { useState, useEffect } from "react";
import PropertyForm from "../Components/PropertyForm";
import { useParams } from "react-router-dom";

const EditProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({}); // State to hold validation errors

  useEffect(() => {
    setLoading(true);
    fetchProperty(id)
      .then((data) => {
        setProperty(data);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const fetchProperty = async (id) => {
    try {
      const response = await fetch(
        `https://6643af396c6a6565870807bf.mockapi.io/api/v1/property/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Failed to fetch property");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = validate(property);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await editProperty(property);
        console.log("Property edited successfully");
      } catch (error) {
        console.error("Failed", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (data) => {
    let errors = {};

    if (!data.title || data.title.trim() === "") {
      errors.title = "Title is required";
    }
    if (!data.id || data.id.trim() === "") {
        errors.id = "ID is required";
      }  if (!data.city || data.city.trim() === "") {
        errors.title = "City is required";
      }
    if (!data.description || data.description.trim() === "") {
      errors.description = "Description is required";
    }
    if (!data.price || data.price.trim() === "") {
        errors.price = "Price is required";
      }
      if (!data.overview || data.overview.trim() === "") {
        errors.overview = "Title is required";
      }
    if (!data.address || data.address.trim() === "") {
      errors.address = "Address is required";
    }
    return errors;
  };

  const editProperty = async (propertyData) => {
    try {
      const response = await fetch(
        `https://6643af396c6a6565870807bf.mockapi.io/api/v1/property/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(propertyData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {property && (
        <PropertyForm
          title="Edit Property"
          handleChange={handleInputChange}
          property={property}
          setProperty={setProperty}
          isEdit={true}
          handleSubmit={handleSubmit}
          errors={errors} 
        />
      )}
    </div>
  );
};

export default EditProperty;
