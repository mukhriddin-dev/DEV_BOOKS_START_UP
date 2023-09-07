import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const useCountry = {
  createCountry: (data) => api.post("/country", data),
  getCountry: () => api.get("/country", { headers }),
  getCountryItem: (id) => api.get(`/country/${id}`, { headers }),
  updateCountry: (id,data) => api.put(`/country/${id}`, data, { headers }),
  deleteCountry: (id) => api.delete(`/country/${id}`, { headers }),
};

export default useCountry;