import { Link } from "react-router-dom";

const NoNotes = () => {
  return (
    <div className="shadow-lg col-lg-12 col-md-12 col-sm-12 col-xl-8 mx-auto my-auto">
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-center mt-2">You don't have any notes yet.</h3>
        <Link
          to="/notes/add"
          className="btn btn-outline-secondary btn-lg rounded-pill mt-3"
        >
          Create a note.
        </Link>
      </div>
    </div>
  );
};

export default NoNotes;
