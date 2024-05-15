import React from "react";
import { useLocation } from "react-router-dom";

const PropertyDetails = (id) => {
  const location = useLocation();
  const property = location.state ? location.state.property : null;
    if (!property) return <h1 className="text-center text-2xl font-bold text-gray-800  mt-8">Property Not Found</h1>;

    
    return (
        <div className="bg-slate-50 min-h-screen py-8">
            
      
            <div className="container bg-white rounded-lg shadow-lg justify-center  mx-auto px-8 py-8  mt-20">
            <div className=" justify-center items-center mb-3">
              <h1 className="text-3xl font-bold text-left text-gray-900">Property</h1>
        <p className="text-left text-gray-700"> Details of selected property</p>
      </div>
        <div className="">
     
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
    
                        <div className="h-[460px] item-left rounded-lg bg-gray-300 mb-4">
                            <img className="w-full h-full object-cover" src={property.image} alt="Property Image" />
                        </div>
                    </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">{property.title}</h2>
                    <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span className="bg-slate-100 text-black text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
        </div>
                    {/* <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   { property.overview}
                    </p> */}
                    <div className="flex mb-4">
                        <div className="mr-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                            <span className="text-gray-600 dark:text-gray-300">${property.price}</span>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">City: </span>
                            <span className="text-gray-600 dark:text-gray-300">{property.city}</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300"> Property Address: </span>
                        <div className="flex items-center mt-2">

                        <span className="text-gray-600 dark:text-gray-300">{property.address}</span>
</div>
                    </div>
                    <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Contact Number:</span>
                        <div className="flex items-center mt-2">
                            <span className=" mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path
                  d="M7.18848 2.51372C6.28217 1.60741 4.81275 1.60741 3.90644 2.51372C2.03119 4.38896 2.03119 7.42934 3.90644 9.30459L11.3627 16.7609C13.238 18.6361 16.2784 18.6361 18.1536 16.7609C19.0599 15.8546 19.0599 14.3852 18.1536 13.4788L16.0824 11.4077C15.351 10.6763 14.1653 10.6763 13.4339 11.4077C13.2233 11.6183 12.8817 11.6183 12.671 11.4077L8.91853 7.65514C8.70787 7.44448 8.70787 7.10293 8.91853 6.89227C9.64989 6.1609 9.64989 4.97513 8.91853 4.24377L7.18848 2.51372Z"
                  fill="#000000" />
              </svg>
                            </span>
                            <span className="text-gray-600 dark:text-gray-300">{property.contact}</span>

                        </div>
         
                    </div>
              
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300"> Property Description:</span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {property.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default PropertyDetails;