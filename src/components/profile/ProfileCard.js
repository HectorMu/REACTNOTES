import { Link } from "react-router-dom";

const ProfileCard = ({ user, toggleEditing, toggleConfig }) => {
  return (
    <div className="shadow py-5 text-center ">
      <div className="shadow py-5">
        <i className="fas fa-user fa-5x"></i>
        <h3 className="mt-2 fw-bolder">
          {user.firstname} {user.lastname}
        </h3>
        <h4 className="mt-2 fw-bolder">{user.email}</h4>
        <h4 className="mt-2 fw-bolder">Notes: {user.notesCount}</h4>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button
          onClick={toggleEditing}
          className="btn btn-primary rounded-circle btn-lg"
        >
          <i className="fas fa-pen"></i>{" "}
        </button>
        <button
          onClick={toggleConfig}
          className="btn btn-primary rounded-circle btn-lg"
        >
          <i className="fas fa-cog"></i>{" "}
        </button>
        <Link to="/notes" className="btn btn-primary rounded-circle btn-lg">
          <i className="far fa-sticky-note"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
