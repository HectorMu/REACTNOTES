import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../services/auth";

const LoggedLinks = ({ setUser, user }) => {
  let navigate = useNavigate();
  const handleLogOut = () => {
    setUser(null);
    logout();
    navigate("/login");
  };
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse ms-auto" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/notes" className="nav-link">
            My notes
          </Link>
        </div>
      </div>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <div className="dropdown">
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
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <button onClick={handleLogOut} className="dropdown-item">
                <i className="fas fa-sign-out-alt ml-2" /> Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedLinks;
