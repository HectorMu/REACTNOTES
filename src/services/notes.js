import { toast } from "react-hot-toast";
import { checkInternetConnection, errorCatcher } from "../helpers/helpers";
import { baseUrl } from "./api";

export const getNotes = async () => {
  const token = window.localStorage.getItem("NNtoken");
  try {
    const response = await fetch(`${baseUrl}/listall`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    if (!checkInternetConnection()) {
      toast.error("Check your internet connection.");
      return [];
    }
    toast.error(
      "We are having connectivity issues with our server. Try again later."
    );
    return [];
  }
};
export const getOne = async (id) => {
  const token = window.localStorage.getItem("NNtoken");
  try {
    const response = await fetch(`${baseUrl}/listone/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data[0];
  } catch (error) {
    if (!checkInternetConnection()) {
      toast.error("Check your internet connection.");
      return [];
    }
    toast.error(
      "We are having connectivity issues with our server. Try again later."
    );
    return [];
  }
};

export const saveNote = async (title, content, importance) => {
  const token = window.localStorage.getItem("NNtoken");
  try {
    const response = await fetch(`${baseUrl}/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        content,
        importance,
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

export const updateNote = async (id, title, content, importance) => {
  const token = window.localStorage.getItem("NNtoken");
  try {
    const response = await fetch(`${baseUrl}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        content,
        importance,
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

export const deleteNote = async (id) => {
  const token = window.localStorage.getItem("NNtoken");
  try {
    const response = await fetch(`${baseUrl}/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
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
