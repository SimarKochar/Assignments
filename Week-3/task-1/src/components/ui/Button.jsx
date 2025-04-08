import React, { useState } from 'react';

const Button = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Button clicked!");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="min-w-[120px] bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 
        focus:ring-4 focus:ring-rose-200 transition-all duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Loading..." : "Click Me"}
    </button>
  );
};

export default Button;