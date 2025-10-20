import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import defaultFlag from "../assets/images.png";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load countries.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Countries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {countries.map((country, index) => (
<<<<<<< HEAD
          <Link key={index} to={`/CountryDetails/${country.name.common}`}>
=======
          <Link
            key={index}
            to={`/CountryDetails/${encodeURIComponent(country.name.common)}`}
          >
>>>>>>> b6198cb (update vercel)
            <div className="p-4 border rounded-xl shadow-md flex flex-col items-center hover:bg-gray-100 cursor-pointer">
              <img
                src={country.flags?.png || defaultFlag}
                alt={country.name.common}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h2 className="font-semibold text-lg">{country.name.common}</h2>
              <p className="text-sm text-gray-600">
                Capital: {country.capital ? country.capital[0] : "N/A"}
              </p>
              <p className="text-sm text-gray-600">Region: {country.region}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
