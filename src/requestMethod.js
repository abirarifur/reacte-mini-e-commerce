import axios from "axios";

const BASE_URL = "https://mini-api.onrender.com/api/";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
//   .currentUser?.accessToken;
const TOKEN = "asdasd";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
