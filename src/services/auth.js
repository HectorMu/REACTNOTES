import { checkInternetConnection, errorCatcher } from "../helpers/helpers";
import { baseUrl } from "./api";
export const login = async (email, pass) => {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        pass,
      }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    if (!checkInternetConnection()) {
      return new errorCatcher(false, "No internet connection");
    }
    return new errorCatcher(
      false,
      "We are having connectivity issues with our server."
    );
  }
};

export const signup = async (firstname, lastname, email, pass) => {
  try {
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
  } catch (error) {
    console.log(error);
    if (!checkInternetConnection()) {
      return new errorCatcher(false, "No internet connection");
    }
    return new errorCatcher(
      false,
      "We are having connectivity issues with our server."
    );
  }
};

export const logout = () => {
  window.localStorage.removeItem("userSession");
  window.localStorage.removeItem("NNtoken");
};

export const SendRecoverEmail = async (email) => {
  try {
    const response = await fetch(`${baseUrl}/recover-password/`, {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    if (!checkInternetConnection()) {
      return new errorCatcher(false, "No internet connection");
    }
    return new errorCatcher(
      false,
      "We are having connectivity issues with our server."
    );
  }
};

export const VerifyEmailToken = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/verify-email-token/${token}`, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });

    return await response.json();
  } catch (error) {
    console.log(error);
    if (!checkInternetConnection()) {
      return new errorCatcher(false, "No internet connection");
    }
    return new errorCatcher(
      false,
      "We are having connectivity issues with our server."
    );
  }
};

export const PasswordReset = async (token, password) => {
  try {
    const response = await fetch(
      `${baseUrl}/reset-password/${token.toString()}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password,
        }),
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
    if (!checkInternetConnection()) {
      return new errorCatcher(false, "No internet connection");
    }
    return new errorCatcher(
      false,
      "We are having connectivity issues with our server."
    );
  }
};
