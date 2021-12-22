import { Link, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { login } from "../../services/auth";
import { toast } from "react-hot-toast";

const Login = ({ setUser }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login(email, pass);
    if (response.status === false) {
      return toast.error(response.statusText);
    }
    const { accessToken, serializedUser } = response;
    toast.success(`Welcome ${serializedUser.firstname}`);

    window.localStorage.setItem("NNtoken", accessToken);
    window.localStorage.setItem("userSession", JSON.stringify(serializedUser));
    const userData = JSON.parse(window.localStorage.getItem("userSession"));
    setUser(userData);
    navigate("/notes");
  };
  return (
    <div className="row mt-5 vh-100 w-100">
      <div className="col col-lg-4 col-md-4 bg-custom-1 d-sm-none d-none d-lg-block d-md-none d-xl-block shadow-lg">
        <div className=" d-flex flex-column gap-2 text-center h-100 justify-content-center rounded ">
          <h1 className="display-4 my-4">Welcome back!</h1>
          <h1 className="display-5 my-4">
            Log in into your account to access to your notes.
          </h1>
          <div className="mt-5">
            <div className="container">
              <p style={{ fontSize: "22px", fontWeight: "bolder" }}>
                ¿You don't have an account yet?
              </p>
              <Link to="/signup" className="btn btn-primary btn-lg btn-block">
                Sign up now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-5 col-xl-4 col-md-8 col-12 mx-auto my-auto">
        <div className="container">
          <div id="login-card" className="shadow ">
            <div
              className="card-header text-center fw-bolder text-white"
              style={{ fontSize: "40px", backgroundColor: "#3c5c72" }}
            >
              Log In
            </div>
            <div className="card-body">
              <div className="card-text text-center d-lg-none d-xl-none">
                Welcome back, log in to access your notes
              </div>
              <form onSubmit={handleLogin}>
                <div className="input-group input-group-lg mb-3 mt-2">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="input-group input-group-lg">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    required
                  />
                </div>
                <small>
                  <Link to="/recover">Recover my password</Link>
                </small>
                <button
                  type="submit"
                  className="btn mt-4 btn-primary btn-lg w-100"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
