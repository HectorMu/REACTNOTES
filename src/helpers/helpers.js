export const checkInternetConnection = () => {
  return window.navigator.onLine === true ? true : false;
};
