import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjM4ZWMzZmE1N2EzNWNmMTdhZTIyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODI0ODEyMywiZXhwIjoxNjY4NTA3MzIzfQ.4-IE117O_lCPtrvYZ3wsXrC7OCjZ4eHOV7MCOSLKOw4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
