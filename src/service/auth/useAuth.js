import api from "../axios";

const useAuth = {
    register: (data) => api.post("/register", data),
    login: (data) => api.post("/login", data)
};


export default useAuth;