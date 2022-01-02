import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { login } from "../../services/auth";
import { toast } from "react-hot-toast";
import { Session } from "../../contexts/SessionContextProvider";

function LoginForm() {
  const { setUser } = useContext(Session);
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
    <div className="col-12 col-sm-12 col-md-8 col-lg-5 col-xl-5 mx-auto mt-5 py-5 container ">
      <form
        onSubmit={handleLogin}
        className="card border-0 rounded-0 shadow-lg "
      >
        <div className="pt-3 ps-4 ">
          <h1 className=" fw-bolder ">Log in</h1>
          <p>Log in to access to your notes.</p>
        </div>
        <div className="card-body">
          <div class="formgroup__animated mb-3">
            <input
              type="email"
              id="email"
              class="input__animated"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label for="email" class="animated__label">
              Email
            </label>
          </div>
          <div class="formgroup__animated mb-3">
            <input
              type="password"
              id="password"
              class="input__animated"
              placeholder=" "
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              required
            />
            <label for="password" class="animated__label">
              Password
            </label>
          </div>

          <small>
            <Link
              to="/recover"
              className="text-secondary text-decoration-none fw-bold "
            >
              Forgot your password?
            </Link>
          </small>
          <button
            type="submit"
            className="btn  btn-primary fs-5 mt-3 w-100 rounded-pill"
          >
            Log In
          </button>
          <hr />
          <p className="text-center">¿You don't have an account?</p>
          <Link
            to="/signup"
            className="btn btn-primary rounded-pill fs-5 w-100  "
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
