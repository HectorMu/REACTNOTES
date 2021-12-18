import { errorCatcher, checkInternetConnection } from "../helpers/helpers";

export const formspreeContact = async (reply, message) => {
  try {
    const response = await fetch("https://formspree.io/f/xleapeqa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _replyto: reply,
        message: message,
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
      "We are having issues with our provider, try again later."
    );
  }
};
