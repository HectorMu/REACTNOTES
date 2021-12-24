import { Link } from "react-router-dom";

const FloatingAddButton = () => {
  return (
    <div className="shadow-lg rounded-circle">
      <Link
        to="/notes/add"
        className="  rounded-circle btn btn-primary btn-lg d-xl-none d-lg-none"
      >
        <i className="fas fa-plus"></i>
      </Link>
    </div>
  );
};

export default FloatingAddButton;
