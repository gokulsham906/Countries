import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../Components/Loading";
import defaultFlag from "../assets/images.png";

const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
<<<<<<< HEAD
    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`)
=======
<<<<<<< HEAD
    // Fetch using flexible search (no fullText)
    fetch(`https://restcountries.com/v3.1/name/${name}`)
=======
    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`)
>>>>>>> b6198cb (update vercel)
>>>>>>> 5365f78
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
<<<<<<< HEAD
        setCountry(data[0]);
=======
<<<<<<< HEAD
        setCountry(data[0]); // first match
=======
        setCountry(data[0]);
>>>>>>> b6198cb (update vercel)
>>>>>>> 5365f78
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load country details.");
        setLoading(false);
      });
  }, [name]);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">{error}</p>;
<<<<<<< HEAD
  if (!country) return <p>No details found.</p>;
=======
<<<<<<< HEAD
=======
  if (!country) return <p>No details found.</p>;
>>>>>>> b6198cb (update vercel)
>>>>>>> 5365f78

  return (
    <div className="p-4">
      <Link to="/CountryList" className="text-blue-500 underline mb-4 inline-block">
        &larr; Back to List
      </Link>
      <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
      <img
        src={country.flags?.png || defaultFlag}
        alt={country.name.common}
        className="w-64 h-40 object-cover rounded mb-4"
      />
      <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
};

export default CountryDetails;
