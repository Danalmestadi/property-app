import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const PropertyList = ({ properties }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const encryptId = (id) => {
    return CryptoJS.AES.encrypt(id.toString(), "secret key").toString();
  };

  const handleClick = (id) => {
    const encryptedId = encryptId(id);
    const property = properties.find((property) => property.id === id);
    if (property) {
      navigate(`/propertydetails/${encryptedId}`, { state: { property } });
    } else {
      console.error(`Property with ID ${id} not found.`);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-8 overflow-hidden">
      <div className="my-8">
        <h1 className="text-3xl font-bold text-left text-gray-900">
          Properties
        </h1>
        <p className="text-left text-gray-700">List of properties</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {currentProperties.map((property) => (
          <div
            key={property.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          >
            <img
              className="rounded-t-lg"
              src={property.image}
              alt="Property Image"
            />

            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {property.title}
              </h5>

              <p className="mb-3 font-normal text-gray-700">{property.city}</p>
              <p className="mb-3 font-normal text-gray-700">
                Ab molestiae deleniti autem officiis fuga eveniet veniam
              </p>
              <p className="mb-3 font-bold text-gray-700">${property.price}</p>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleClick(property.id)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-neutral-800 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300"
                >
                  Details
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
                <div className="flex items-center">
                  <Link
                    to={`/editproperty/${property.id}`}
                    className="flex items-center space-x-1"
                  >
                    <svg
                      className="h-4 w-4 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    <span className=" font-semibold text-black">Edit</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full mt-5">
        <ul className="flex list-none p-0">
          {[
            ...Array(Math.ceil(properties.length / propertiesPerPage)).keys(),
          ].map((number) => (
            <li key={number} className="cursor-pointer mx-1">
              <a
                onClick={() => paginate(number + 1)}
                className="hover:bg-gray-200 px-3 py-1 rounded"
              >
                {number + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyList;
