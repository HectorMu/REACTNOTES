import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PasswordReset, VerifyEmailToken } from "../../services/auth";

const ResetPasswordForm = ({ token }) => {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (password.length < 8)
      return toast.error("Password must be 8 characters long.");
    if (password !== confirm) return toast.error("Passwords don't match.");

    const tokenResults = await VerifyEmailToken(token);
    if (!tokenResults.status) {
      navigate("/login");
      return toast.error("The recover link has expired or has been corrupted.");
    }
    const results = await PasswordReset(token, password);

    if (!results.status) return toast.error(results.statusText);

    toast.success("Password changed succesfully.");

    navigate("/login");
  };
  return (
    <div className="col-12 col-sm-12 col-md-8 col-lg-5 col-xl-5 mx-auto mt-5 py-5 container">
      <form
        onSubmit={handlePasswordReset}
        className="card border-0 rounded-0 shadow-lg py-4"
      >
        <div className="pt-3 ps-4 ">
          <h1 className=" fw-bolder ">Password reset</h1>
          <p>
            Choose a new password and confirm it. After this you will be
            redirected to log in page.
          </p>
        </div>
        <div className="card-body">
          <div className="mb-2">
            <input
              type="password"
              placeholder="New password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              placeholder="Confirm password"
              className="form-control"
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}
              required
            />
          </div>

          <button
            type="submit"
            className="btn  btn-primary fs-5 mt-3 w-100 rounded-pill"
          >
            Save my new password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
