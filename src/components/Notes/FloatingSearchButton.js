const FloatingSearchButton = ({ toggleFloatingSearch }) => {
  return (
    <button
      onClick={toggleFloatingSearch}
      className="btn btn-primary btn-lg  shadow-lg rounded-circle d-xl-none d-lg-none"
    >
      <i className="fas fa-search"></i>
    </button>
  );
};
export default FloatingSearchButton;
