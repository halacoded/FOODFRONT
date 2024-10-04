import instance from ".";
const getAllRecipes = async () => {
  try {
    const { data } = await instance.get("/recipes");
    return data; // The backend directly returns the array of recipes
  } catch (error) {
    console.error(
      "Error fetching all recipes:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const getOneRecipe = async (id) => {
  try {
    const { data } = await instance.get(`/recipes/${id}`);
    return data; // The backend directly returns the recipe object
  } catch (error) {
    console.error(
      "Error fetching recipe:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const createRecipe = async (recipeInfo) => {
  try {
    const { data } = await instance.post("/recipes", recipeInfo);
    return data; // The backend returns the newly created recipe
  } catch (error) {
    console.error(
      "Error creating recipe:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const updateRecipe = async (id, recipeInfo) => {
  try {
    const { data } = await instance.put(`/recipes/${id}`, recipeInfo);
    return data; // The backend returns the updated recipe
  } catch (error) {
    console.error(
      "Error updating recipe:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const deleteOneRecipe = async (id) => {
  try {
    const { data } = await instance.delete(`/recipes/${id}`);
    return data; // The backend returns a success message
  } catch (error) {
    console.error(
      "Error deleting recipe:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteOneRecipe,
};
