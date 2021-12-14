import { toast } from "react-hot-toast";
import { checkInternetConnection } from "../helpers/helpers";
import { baseUrl } from "./api";

export const getNotes = async () => {
  try {
    const response = await fetch(`${baseUrl}/listall`);
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
  try {
    const response = await fetch(`${baseUrl}/listone/${id}`);
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
  const token = window.localStorage.getItem("token");
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
        fkuser: 1,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    if (!checkInternetConnection()) {
      toast.error("Check your internet connection.");
      return;
    }
    toast.error(
      "We are having connectivity issues with our server. Try again later."
    );
  }
};

export const updateNote = async (id, title, content, importance) => {
  const token = window.localStorage.getItem("token");
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
        fkuser: 1,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    if (!checkInternetConnection()) {
      toast.error("Check your internet connection.");
      return;
    }
    toast.error(
      "We are having connectivity issues with our server. Try again later."
    );
  }
};

export const deleteNote = async (id) => {
  const token = window.localStorage.getItem("token");
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
    if (!checkInternetConnection()) {
      toast.error("Check your internet connection.");
      return [];
    }
    toast.error(
      "We are having connectivity issues with our server. Try again later."
    );
  }
};
