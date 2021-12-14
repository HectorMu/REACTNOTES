import { baseUrl } from "./api";

export const login = async (email, pass) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      pass,
    }),
  });
  const payload = await response.json();
  return payload;
};

export const signup = async (firstname, lastname, email, pass) => {
  const response = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      pass,
    }),
  });
  return await response.json();
};

export const logout = () => {
  window.localStorage.removeItem("userSession");
  window.localStorage.removeItem("NNtoken");
};
