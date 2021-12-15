import { errorCatcher, checkInternetConnection } from "../helpers/helpers";
import { baseUrl } from "./api";

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
