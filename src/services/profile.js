import { errorCatcher, checkInternetConnection } from "../helpers/helpers";
import { baseUrl } from "./api";

export const getProfileData = async () => {
  const token = window.localStorage.getItem("NNtoken");
  const response = await fetch(`${baseUrl}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};
export const ChangeProfileNames = async (firstname, lastname) => {
  const token = window.localStorage.getItem("NNtoken");
  try {
    const response = await fetch(`${baseUrl}/profile/editnames`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstname,
        lastname,
      }),
    });
    const results = await response.json();
    return results;
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

export const changePassword = async (currentPassword, newPassword) => {
  const token = window.localStorage.getItem("NNtoken");
  try {
    const response = await fetch(`${baseUrl}/profile/changepassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    });
    const results = await response.json();
    return results;
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

export const DeleteAccount = async (password) => {
  const token = window.localStorage.getItem("NNtoken");
  try {
    const response = await fetch(`${baseUrl}/profile/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        pass: password,
      }),
    });
    return response.json();
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
