import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../services/auth";

const LoggedLinks = ({ user, setUser }) => {
  let navigate = useNavigate();
  const handleLogOut = () => {
    setUser(null);
    logout();
    navigate("/login");
  };
  return (
    <>
      <div className="navbar-nav">
        <div className="dropdown ">
          <button
            className="btn btn-primary dropdown-toggle btn-sm"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="far fa-user" /> {user.firstname}
            <small />
          </button>
          <div
            className="dropdown-menu position-absolute dropdown-menu-end"
            aria-labelledby="dropdownMenuButton"
          >
            <Link className="dropdown-item" to="/profile">
              <i className="fas fa-id-card"></i> My Profile
            </Link>
            <button onClick={handleLogOut} className="dropdown-item">
              <i className="fas fa-sign-out-alt ml-2" /> Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedLinks;
