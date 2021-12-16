import { Link } from "react-router-dom";

const AddNoteButtonFixed = () => {
  return (
    <div className="shadow-lg rounded-circle">
      <Link
        to="/notes/add"
        className="fixed-bottom-right  rounded-circle btn btn-primary btn-lg d-xl-none d-lg-none"
      >
        <i className="fas fa-plus"></i>
      </Link>
    </div>
  );
};

export default AddNoteButtonFixed;