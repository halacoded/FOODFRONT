import instance from ".";

const getAllCategories = async () => {
  try {
    const { data } = await instance.get("/categories");
    return data; // The backend directly returns the array of categories
  } catch (error) {
    console.error("Error fetching categories:", error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Data:", error.response.data);
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up request:", error.message);
    }
    throw error;
  }
};

const getOneCategory = async (id) => {
  try {
    const { data } = await instance.get(`/categorys/${id}`);
    return data; // The backend directly returns the category object
  } catch (error) {
    console.error(
      "Error fetching category:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const createCategory = async (categoryInfo) => {
  try {
    const { data } = await instance.post("/categorys", categoryInfo);
    return data; // The backend returns the newly created category
  } catch (error) {
    console.error(
      "Error creating category:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const updateCategory = async (id, categoryInfo) => {
  try {
    const { data } = await instance.put(`/categorys/${id}`, categoryInfo);
    return data; // The backend returns the updated category
  } catch (error) {
    console.error(
      "Error updating category:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const deleteOneCategory = async (id) => {
  try {
    const { data } = await instance.delete(`/categorys/${id}`);
    return data; // The backend returns a success message
  } catch (error) {
    console.error(
      "Error deleting category:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteOneCategory,
};
