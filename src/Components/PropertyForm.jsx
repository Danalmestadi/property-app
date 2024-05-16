import React from "react";
import { Link } from "react-router-dom";
import TextInput from "../utilties/TextInput";

export default function PropertyForm({
  handleChange,
  handleSubmit,
  property,
  title,
  isEdit,
  errors,
}) {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container bg-white rounded-lg shadow-lg justify-center mx-auto px-8 py-8 mt-20">
        <form onSubmit={handleSubmit} className="mb-4 px-10">
          <div className="my-8">
            <h1 className="text-3xl font-bold text-left text-gray-900">
              {title}
            </h1>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              label="Property ID"
              id="id"
              name="id"
              value={property.id}
              onChange={handleChange}
              error={errors.id}
            />

            <TextInput
              label="Property title"
              id="title"
              name="title"
              value={property.title}
              onChange={handleChange}
              error={errors.title}
            />

            <TextInput
              label="Overview"
              id="overview"
              name="overview"
              value={property.overview}
              onChange={handleChange}
              error={errors.overview}
            />

            <TextInput
              label="Address"
              id="address"
              name="address"
              value={property.address}
              onChange={handleChange}
              error={errors.address}
            />

            <TextInput
              label="City"
              id="city"
              name="city"
              value={property.city}
              onChange={handleChange}
              error={errors.city}
            />

            <TextInput
              label="Price"
              id="price"
              name="price"
              value={property.price}
              onChange={handleChange}
              error={errors.price}
            />
            <div className="w-full">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={property.description}
                onChange={handleChange}
                rows="8"
                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.description ? "border-red-500" : ""
                }`}
                placeholder="Your description here"
                required
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Link
              to={`/property`}
              className="inline-flex items-center text-black rounded-md text-md px-14 py-2 text-center font-semibold leading-6 bg-gray-100 hover:bg-black hover:text-white"
            >
              Cancel
            </Link>
            <button
              className="inline-flex justify-center items-center my-6 py-2 px-4 font-semibold text-center text-white rounded-md bg-neutral-900 hover:bg-black"
              type="submit"
            >
              {isEdit ? "Save" : "Add Property"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
