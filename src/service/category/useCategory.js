import api from "../axios";

const headers = {
    "Content-Type": "application/json",
     Authorization: `Bearer ${localStorage.getItem("token")}`,
};


const useCategory = {
    createCategory: (data) => api.post("/category", data),
    getCategory: () => api.get("/category", {headers}),
    getCategoryItem: (id) => api.get(`/category/${id}`, {headers}),
    updateCategory: (id, data) => api.put(`/category/${id}`, data, {headers}),
    deleteCategory: (id) => api.delete(`/category/${id}`, {headers}),
};

export default useCategory;