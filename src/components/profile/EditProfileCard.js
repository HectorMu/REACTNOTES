const EditProfileCard = ({ user, toggleEditing }) => {
  return (
    <div className="card-body">
      <div className="text-center shadow py-3">
        <i className="fas fa-user fa-5x"></i>
      </div>
      <div className="row mt-2">
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="Firstname"
            value={user.firstname}
            required
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="Lastname"
            value={user.lastname}
            required
          />
        </div>
      </div>
      <input
        className="form-control mt-2"
        type="text"
        placeholder="Lastname"
        value={user.email}
        readOnly
        required
      />
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-primary rounded-circle">
          <i className="fas fa-save"></i>{" "}
        </button>
        <button
          onClick={toggleEditing}
          className="btn btn-danger rounded-circle"
        >
          <i class="fas fa-times"></i>{" "}
        </button>
      </div>
    </div>
  );
};

export default EditProfileCard;
