import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";
import { DeleteAccount } from "../../services/profile";

const DeleteAccountForm = ({ toggleDeleteAccount, setUser }) => {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleAccountDeletion = async (e) => {
    e.preventDefault();
    const confirmation = window.confirm(
      "Last advise, are you sure to delete your account?"
    );
    if (!confirmation) return;
    const results = await DeleteAccount(password);
    if (!results.status) return toast.error(results.statusText);
    logout();
    setUser(null);
    navigate("/login");
    toast.success("Account deleted, we will miss you!");
  };
  return (
    <form onSubmit={handleAccountDeletion} className="w-100">
      <p className="alert  rounded-0  border-0 bg-dark text-white ">
        This will delete your account with all your notes too.
      </p>
      <div className="mb-2">
        <input
          type="password"
          className="form-control"
          placeholder="Enter your passwod"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary rounded-circle">
          <i className="fas fa-save"></i>
        </button>
        <button
          onClick={toggleDeleteAccount}
          type="button"
          className="btn btn-danger rounded-circle"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </form>
  );
};

export default DeleteAccountForm;
