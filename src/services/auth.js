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
