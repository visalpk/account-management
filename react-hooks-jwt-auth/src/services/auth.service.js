import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};



const register2 = (title, fullname, email,  dob, mobile, pan, aadhar,approval ) => {
  console.log(title, fullname, email,  dob, mobile, pan, aadhar, approval)
  return axios.post(API_URL + "vsignup", {
    title, fullname, email, dob, mobile, pan, aadhar, approval
  });
};


const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  register2,
  login,
  logout,
  getCurrentUser
  
};
