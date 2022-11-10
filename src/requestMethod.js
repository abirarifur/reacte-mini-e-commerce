import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjM4ZWMzZmE1N2EzNWNmMTdhZTIyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODA3ODc3NiwiZXhwIjoxNjY4MzM3OTc2fQ.NA5rJddSVAfX0s9RP1CM-zByvVlqFyJ9r4-aBbmLC_s";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
