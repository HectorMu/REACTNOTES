import { toast } from "react-hot-toast";
import { checkInternetConnection } from "../helpers/helpers";

//Dev
const baseUrl = "http://localhost:4000/api";
//production
// const baseUrl = "https://nodenotesapi.herokuapp.com/api/"

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

export const saveNote = async (title, content, importance) => {
  try {
    const response = await fetch(`${baseUrl}/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
  try {
    const response = await fetch(`${baseUrl}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
  try {
    const response = await fetch(`${baseUrl}/delete/${id}`, {
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
