import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="row mt-5 vh-100 ">
      <div className="col col-lg-5 col-xl-4 col-md-8 col-12 mx-auto my-auto">
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
              <form action="/signup" method="post">
                <div className="input-group input-group-lg mb-3 mt-2">
                  <input
                    id="first"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="input-group input-group-lg mb-3 mt-2">
                  <input
                    id="last"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="input-group input-group-lg mb-3 mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
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
                    name="pass"
                    placeholder="Password"
                    className="form-control"
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
                    name="confirm"
                    placeholder="Confirm Password"
                    className="form-control"
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
