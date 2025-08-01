import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-nodejs-6ws9.onrender.com";

export function signUp(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: randomUsername(data.name),
    avatar: "https://picsum.photos/250/250",
    bg: "https://picsum.photos/400/900",
  };
  const response = axios.post(`${baseURL}/user/`, body);
  return response;
}

export function signIn(data) {
  const response = axios.post(`${baseURL}/auth/login`, data);
  return response;
}

export function userLog() {
  const response = axios.get(`${baseURL}/user/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

function randomUsername(name) {
  const cleanName = name.replace(/\s+/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${cleanName}-${randomNumber}`;
}

export function getUserById(id) {
  const response = axios.get(`${baseURL}/user/findById/${id}`);
  return response;
}
