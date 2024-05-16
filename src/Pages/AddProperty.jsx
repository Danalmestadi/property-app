import React, { useState } from "react";
import PropertyForm from "../Components/PropertyForm";

const AddProperty = () => {
  const [errors, setErrors] = useState({}); 
  const [property, setProperty] = useState({
    id: "",
    title: "",
    overview: "",
    address: "",
    city: "",
    price: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(property);
    if (Object.keys(validationErrors).length === 0) {
      addProperty(property);
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
    }
    if (!data.city || data.city.trim() === "") {
      errors.city = "City is required";
    }
    if (!data.description || data.description.trim() === "") {
      errors.description = "Description is required";
    }
    if (!data.price || data.price.trim() === "") {
      errors.price = "Price is required";
    }
    if (!data.overview || data.overview.trim() === "") {
      errors.overview = "Overview is required";
    }
    if (!data.address || data.address.trim() === "") {
      errors.address = "Address is required";
    }
    return errors;
  };

  const addProperty = async (propertyData) => {
    try {
      const response = await fetch(
        "https://6643af396c6a6565870807bf.mockapi.io/api/v1/property",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(propertyData),
        }
      );
      if (response.ok) {
        console.log("Property added successfully");
        setProperty({
          id: "",
          title: "",
          overview: "",
          address: "",
          city: "",
          price: "",
          description: "",
        });
      } else {
        console.error("Failed to add property");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <PropertyForm
        title="Add Property"
        handleChange={handleInputChange}
        property={property}
        setProperty={setProperty}
        isEdit={false}
        handleSubmit={handleSubmit}
        errors={errors} // Pass errors to the PropertyForm component
      />
    </div>
  );
};

export default AddProperty;
