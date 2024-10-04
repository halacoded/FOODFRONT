import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getOneUser } from "../api/users";

export const Account = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getOneUser(id),
  });

  if (isLoading)
    return (
      <div className="bg-olive min-h-screen flex justify-center items-center text-white text-2xl">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="bg-olive min-h-screen flex justify-center items-center text-white text-2xl">
        Error loading user data
      </div>
    );

  const createdYear = new Date(user.createdAt).getFullYear();

  return (
    <div className="bg-olive min-h-screen flex flex-col p-8 text-white font-telugu">
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate("/home")}
          className="text-white hover:text-olive-light transition-colors mr-4"
          aria-label="Return to Home"
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
        <h1 className="text-4xl font-bold mb-8 text-center">{user.username}</h1>
      </div>
      <div className="bg-olive-light rounded-lg p-8 mb-8 shadow-lg">
        <p className="text-xl mb-4">Email: {user.email}</p>
        <p className="text-xl mb-4">Total Recipes: {user.recipes.length}</p>
        <p className="text-xl">Member since: {createdYear}</p>
      </div>
      <h2 className="text-3xl font-semibold mb-6 text-center">
        {user.username}'s Recipe Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {user.recipes.map((recipe) => (
          <Link
            key={recipe._id}
            to={`/recipe/${recipe._id}`}
            className="bg-white text-olive rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-100 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 ease-in-out hover:text-olive-dark">
              {recipe.name}
            </h3>
            <p className="text-sm text-gray-600">
              {recipe.ingredients.length} ingredients
            </p>
          </Link>
        ))}
      </div>
      {user.recipes.length === 0 && (
        <p className="text-center text-xl mt-8">
          This user hasn't added any recipes yet.
        </p>
      )}
    </div>
  );
};
