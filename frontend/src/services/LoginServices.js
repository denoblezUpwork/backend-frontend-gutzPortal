import axios from 'axios';

const API_URL = '/api/users';

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/auth`, userData);
  return response.data;
};

const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`);
  return response.data;
};

// Assign the object containing functions to a variable
const LoginServices = {
  register,
  login,
  logout,
};

// Export the variable as the default module export
export default LoginServices;
