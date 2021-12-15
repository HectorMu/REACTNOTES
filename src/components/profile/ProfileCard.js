const ProfileCard = ({ user, toggleEditing, toggleConfig }) => {
  return (
    <div className="card-body text-center">
      <div className="shadow py-3">
        <i className="fas fa-user fa-5x"></i>
        <h5 className="mt-2">
          {user.firstname} {user.lastname}
        </h5>
        <h5 className="mt-2">{user.email}</h5>
        <h5 className="mt-2">Notes: {user.notesCount}</h5>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button
          onClick={toggleEditing}
          className="btn btn-primary rounded-circle"
        >
          <i className="fas fa-pen"></i>{" "}
        </button>
        <button
          onClick={toggleConfig}
          className="btn btn-primary rounded-circle"
        >
          <i className="fas fa-cog"></i>{" "}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
