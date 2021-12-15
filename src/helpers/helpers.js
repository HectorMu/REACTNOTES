export const checkInternetConnection = () => {
  return window.navigator.onLine === true ? true : false;
};

export function errorCatcher(status, statusText) {
  return {
    status,
    statusText,
  };
}
