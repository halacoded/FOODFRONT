import React from "react";
import { useNavigate } from "react-router-dom";

export const Recipes = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-olive min-h-screen flex flex-col p-8 text-white font-telugu">
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:text-olive-light transition-colors mr-4"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <h1 className="text-4xl font-bold">Recipes</h1>
      </div>
      {/* ... rest of the component ... */}
    </div>
  );
};
