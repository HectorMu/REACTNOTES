import { useEffect, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Global/Loading";
import { PasswordReset, VerifyEmailToken } from "../../services/auth";

const ResetPassword = () => {
  let { token } = useParams();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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

  const HandleTokenValidation = useCallback(async () => {
    setIsLoading(true);
    const results = await VerifyEmailToken(token);
    if (!results.status) {
      setIsLoading(false);
      navigate("/login");
      toast.error("The recover link has expired or has been corrupted.");
      return;
    }
    setIsLoading(false);
  }, [navigate, token]);

  useEffect(() => {
    HandleTokenValidation();
  }, [HandleTokenValidation]);
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col col-md-6 col-lg-6 mx-auto">
            <div className="card shadow-lg">
              <h5
                className="card-header bg-custom-1 py-3  text-center text-white"
                style={{ fontWeight: "bold", fontSize: "40px" }}
              >
                Recover my password
              </h5>
              <div className="card-body">
                <form onSubmit={handlePasswordReset}>
                  <div className="mb-3">
                    <input
                      type="password"
                      placeholder="New password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="form-control"
                      onChange={(e) => setConfirm(e.target.value)}
                      value={confirm}
                      required
                    />
                  </div>
                  <button type="submit" className="btn  btn-primary w-100">
                    Change password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
