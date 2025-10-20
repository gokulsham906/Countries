<<<<<<< HEAD
import React from 'react';

const Loading = ({ onRetry }) => {
  const handleRetry = (e) => {
    e.preventDefault(); // prevent default button/form behavior
    if (onRetry) onRetry();
  };

=======
import React from "react";

const Loading = () => {
>>>>>>> b6198cb (update vercel)
  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl font-semibold">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      <p className="mt-4">Loading...</p>
<<<<<<< HEAD
      <button
        onClick={handleRetry}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Retry
      </button>
=======
>>>>>>> b6198cb (update vercel)
    </div>
  );
};

export default Loading;
