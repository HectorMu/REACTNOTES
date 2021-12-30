import { ChangeProfileNames } from "../../services/profile";
import { useState } from "react";
import toast from "react-hot-toast";

const EditProfileCard = ({ user, toggleEditing, setUser }) => {
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);

  const handleNamesChange = async (e) => {
    e.preventDefault();

    const results = await ChangeProfileNames(firstname, lastname);

    if (!results.status) return toast.error(results.statusText);

    const { user } = results;
    window.localStorage.setItem("userSession", JSON.stringify(user));
    setUser(user);

    toast.success("Profile information changed succesfully");
    toggleEditing(false);
  };
  return (
    <form onSubmit={handleNamesChange} className="shadow py-2">
      <div className="text-center shadow py-3">
        <i className="fas fa-user fa-5x"></i>
      </div>
      <div className="container">
        <div className="row mt-2">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Firstname"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Lastname"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
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
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button type="submit" className="btn btn-primary rounded-circle">
          <i className="fas fa-save"></i>{" "}
        </button>
        <button
          type="button"
          onClick={toggleEditing}
          className="btn btn-danger rounded-circle"
        >
          <i className="fas fa-times"></i>{" "}
        </button>
      </div>
    </form>
  );
};

export default EditProfileCard;
