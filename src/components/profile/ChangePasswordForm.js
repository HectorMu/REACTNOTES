import { useState } from "react";
import toast from "react-hot-toast";
import { changePassword } from "../../services/profile";
const ChangePasswordForm = ({ togglePasswordChange, toggleConfig }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPassword.length < 8)
      return toast.error("Password must be 8 characters long.");
    if (newPassword !== confirm)
      return toast.error("New password and confirm password doesn't match.");
    const results = await changePassword(currentPassword, newPassword);
    if (!results.status) return toast.error(results.statusText);

    toggleConfig(false);
    toast.success(results.statusText);
  };
  return (
    <form onSubmit={handlePasswordChange} className="w-100">
      <input
        type="password"
        className="form-control mb-2"
        onChange={(e) => setCurrentPassword(e.target.value)}
        value={currentPassword}
        placeholder="Current password"
      />
      <input
        type="password"
        className="form-control mb-2"
        onChange={(e) => setNewPassword(e.target.value)}
        value={newPassword}
        placeholder="New password"
      />
      <input
        type="password"
        className="form-control mb-3"
        onChange={(e) => setConfirm(e.target.value)}
        value={confirm}
        placeholder="Confirm new password"
      />
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button type="submit" className="btn btn-primary rounded-circle">
          <i className="fas fa-save"></i>{" "}
        </button>
        <button
          type="button"
          onClick={togglePasswordChange}
          className="btn btn-danger rounded-circle"
        >
          <i className="fas fa-times"></i>{" "}
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
