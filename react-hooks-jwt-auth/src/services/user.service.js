import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const get = (id) => {
  return axios.get(API_URL + `admin/customers/${id}`, { headers: authHeader() }); 
 
}

const update =(data) => {
  console.log(data);
  return axios.put(API_URL + "admin/customers",data, { headers: authHeader() });
 
}



export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  get,
  update


};
