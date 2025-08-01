import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-nodejs-6ws9.onrender.com";

export function getAllNews(limit, offset) {
  const response = axios.get(`${baseURL}/news?limit=${limit}&offSet=${offset}`);
  return response;
}

export function getLastNews() {
  const response = axios.get(`${baseURL}/news/last`);
  return response;
}

export function getNews(title) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`);
  return response;
}

export function getNewsByUser() {
  const response = axios.get(`${baseURL}/news/searchByUser`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function createNews(body) {
  const response = axios.post(`${baseURL}/news`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function getNewsById(id) {
  const response = axios.get(`${baseURL}/news/findById/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function editNews(body, id) {
  const response = axios.patch(`${baseURL}/news/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function deleteNews(id) {
  const response = axios.delete(`${baseURL}/news/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
