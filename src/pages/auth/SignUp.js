import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { signup } from "../../services/auth";

const SignUp = () => {
  let navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (pass !== confirm) return toast.error("The passwords don't match.");
    if (pass.length < 8)
      return toast.error("The password must be minimum 8 characters long.");

    const results = await signup(firstname, lastname, email, pass);
    if (results.statusText === "emailAlreadyInUse") {
      toast.error("An account is using this email already, try another email.");
      return;
    }
    if (results.status) {
      toast.success("Account registered, now log in to continue.");
      navigate("/login");
    }
  };
  return (
    <div className="row mt-5 vh-100 ">
      <div className="col col-lg-5 col-xl-6 col-md-8 col-12 mx-auto my-auto">
        <div className="container">
          <div
            id="signup-form"
            className="card bg-dark text-white"
            style={{ width: "100%", height: "100%" }}
          >
            <div className="card-body bg-custom-4 ">
              <h3
                className="card-title text-center"
                style={{ fontWeight: "bold", fontSize: "34px" }}
              >
                Create an Account
              </h3>
              <div className="card-text text-center my-2 d-lg-none d-xl-none">
                Welcome! sign up as new user and start saving notes.
              </div>
              <form onSubmit={handleSignup}>
                <div className="row">
                  <div className="col">
                    <div className="input-group input-group-lg mb-3 mt-2">
                      <input
                        id="first"
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        onChange={(e) => setFirstname(e.target.value)}
                        value={firstname}
                        required
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-group input-group-lg mb-3 mt-2">
                      <input
                        id="last"
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                        onChange={(e) => setLastname(e.target.value)}
                        value={lastname}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="input-group input-group-lg mb-3 mt-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <small>
                  <p id="emailMessage" />
                </small>
                <div className="input-group input-group-lg mb-3 mt-2">
                  <input
                    id="pass"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    required
                  />
                </div>
                <small>
                  <p id="res" />
                </small>
                <div className="input-group input-group-lg mb-3 mt-2">
                  <input
                    id="confirm"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    onChange={(e) => setConfirm(e.target.value)}
                    value={confirm}
                    required
                  />
                </div>
                <small>
                  <p id="match" />
                </small>
                <button
                  id="signup"
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  ¡Sign up!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-4 col-md-4 bg-custom-1 d-sm-none d-none d-lg-block d-md-none d-xl-block">
        <div className=" d-flex flex-column gap-2 text-center h-100 justify-content-center rounded ">
          <h1 className="display-4 my-4">Welcome!</h1>
          <h1 className="display-5 my-4">
            Create an account to start saving notes.
          </h1>
          <div className="mt-5">
            <div className="container">
              <p style={{ fontSize: "22px", fontWeight: "bolder" }}>
                ¿You already have an account?
              </p>
              <Link to="/login" className="btn btn-primary btn-lg w-100">
                Log in now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
