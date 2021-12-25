import { useEffect, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Global/Loading";
import { VerifyEmailToken } from "../../services/auth";

const ResetPassword = () => {
  let { token } = useParams();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const HandleTokenValidation = useCallback(async () => {
    setIsLoading(true);
    const results = await VerifyEmailToken(token);
    console.log(results.status);
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
                <form>
                  <div className="form-group">
                    <input
                      type="password"
                      id="newpass"
                      name="newpass"
                      placeholder="New password"
                      className="form-control"
                    />
                  </div>
                  <small>
                    <p id="res" />
                  </small>
                  <div className="form-group">
                    <input
                      type="password"
                      id="confirm"
                      name="confirm"
                      placeholder="Confirm password"
                      className="form-control"
                    />
                  </div>
                  <small>
                    <p id="match" />
                  </small>
                  <button
                    type="submit"
                    id="savepass"
                    className="btn  btn-primary w-100"
                  >
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
