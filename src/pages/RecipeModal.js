import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRecipe } from "../api/recipes";
import { getAllCategories, createCategory } from "../api/categories";
import { getAllIngredients, createIngredient } from "../api/ingredients";

const RecipeModal = ({ onClose, show }) => {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    category: "",
    ingredients: [],
  });
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [newIngredient, setNewIngredient] = useState("");

  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await getAllCategories();
      const fetchedIngredients = await getAllIngredients();
      setCategories(fetchedCategories);
      setIngredients(fetchedIngredients);
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleAddCategory = async () => {
    if (newCategory) {
      const createdCategory = await createCategory({ name: newCategory });
      setCategories([...categories, createdCategory]);
      setNewCategory("");
    }
  };

  const handleAddIngredient = async () => {
    if (newIngredient) {
      const createdIngredient = await createIngredient({ name: newIngredient });
      setIngredients([...ingredients, createdIngredient]);
      setNewIngredient("");
    }
  };

  const { mutate, isError, error, isSuccess, isLoading } = useMutation({
    mutationKey: ["createRecipe"],
    mutationFn: createRecipe,
    onError: (err) => {
      console.error("Recipe creation failed:", err);
    },
    onSuccess: () => {
      console.log("Recipe created successfully");
      queryClient.invalidateQueries("recipes");
      onClose();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(recipe);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10">
      <div className="bg-olive p-8 rounded-lg w-96 text-white font-telugu">
        <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleInputChange}
            placeholder="Recipe Title"
            className="w-full mb-2 p-2 border rounded bg-white text-olive placeholder-gray-400"
            required
          />
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleInputChange}
            placeholder="Recipe Description"
            className="w-full mb-2 p-2 border rounded bg-white text-olive placeholder-gray-400"
            required
          />
          <select
            name="category"
            value={recipe.category}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border rounded bg-white text-olive"
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="flex mb-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="New Category"
              className="flex-grow p-2 border rounded-l bg-white text-olive placeholder-gray-400"
            />
            <button
              type="button"
              onClick={handleAddCategory}
              className="bg-olive-dark text-white p-2 rounded-r hover:bg-olive-light transition-colors"
            >
              Add
            </button>
          </div>
          <select
            name="ingredients"
            multiple
            value={recipe.ingredients}
            onChange={handleInputChange}
            className="w-full mb-2 p-2 border rounded bg-white text-olive"
            required
          >
            {ingredients.map((ingredient) => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
              </option>
            ))}
          </select>
          <div className="flex mb-2">
            <input
              type="text"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              placeholder="New Ingredient"
              className="flex-grow p-2 border rounded-l bg-white text-olive placeholder-gray-400"
            />
            <button
              type="button"
              onClick={handleAddIngredient}
              className="bg-olive-dark text-white p-2 rounded-r hover:bg-olive-light transition-colors"
            >
              Add
            </button>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-white text-olive hover:bg-gray-100 font-bold py-2 px-4 rounded transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-olive-dark text-white hover:bg-olive-light font-bold py-2 px-4 rounded transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Recipe"}
            </button>
          </div>
        </form>
        {isError && <p className="text-red-500 mt-2">{error.message}</p>}
        {isSuccess && (
          <p className="text-green-500 mt-2">Recipe added successfully!</p>
        )}
      </div>
    </div>
  );
};

export default RecipeModal;
