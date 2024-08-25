import { apiClient, clearDetails } from "./config";

export const apiSignup = async(payload) => {
    return apiClient.post("/user/auth/signup", payload); 
};

export const apiLogin = async(payload) => {
    return apiClient.post("/user/auth/tokenlogin", payload); 
};

// export const apiCheckUsernameExists = async(username) => {
//     return apiClient.get(`/auth/${username}`); 
// };

export const apiLogout = async () => {
    clearDetails();
};
