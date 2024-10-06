import React, { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../api/recipes";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { logout } from "../api/auth";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });

  const handleSignOut = () => {
    logout();
    setUser(null);
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  const filteredRecipes = recipes
    ? recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="bg-olive-dark min-h-screen p-8 text-white rounded-3xl">
      <header className="flex justify-between items-center mb-8">
        <nav className="flex space-x-6 text-lg">
          <a href="#" className="font-semibold border-b-2 border-white">
            Popular
          </a>
          <a href="#" className="hover:text-olive-light">
            Our Recs
          </a>
          <a href="#" className="hover:text-olive-light">
            Breakfast
          </a>
          <a href="#" className="hover:text-olive-light">
            More
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-olive-light bg-opacity-30 px-4 py-2 rounded-full text-white placeholder-white"
          />
          <a href="#" className="hover:underline">
            Log out
          </a>
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
      </header>

      <main className="grid grid-cols-3 gap-8">
        <div className="col-span-2 grid grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden h-64">
            <img
              src="/path-to-hummus-image.jpg"
              alt="Hummus plate"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-xl overflow-hidden h-64">
            <img
              src="/path-to-salad-image.jpg"
              alt="Salad plate"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-olive-light bg-opacity-30 rounded-xl h-64"></div>
          <div className="bg-olive-light bg-opacity-30 rounded-xl h-64"></div>
        </div>
        <div className="bg-olive-light bg-opacity-30 rounded-xl p-6">
          <h2 className="text-xl mb-4">No recipes? Create your own!</h2>
          <input
            type="text"
            placeholder="Recipe name"
            className="w-full bg-white bg-opacity-20 px-4 py-2 rounded-full text-white placeholder-white mb-4"
          />
          <button className="bg-white text-olive-dark px-6 py-2 rounded-full hover:bg-opacity-90">
            Create
          </button>
        </div>
      </main>
    </div>
  );
};
