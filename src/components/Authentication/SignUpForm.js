import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/auth";

function SignUpForm() {
  let navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState(" ");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (pass !== confirm) return toast.error("The passwords don't match.");
    if (pass.length < 8)
      return toast.error("The password must be minimum 8 characters long.");

    const results = await signup(firstname, lastname, email, pass);
    if (!results.status) return toast.error(results.statusText);

    toast.success("Account registered, now log in to continue.");
    navigate("/login");
  };
  return (
    <div className="col-12 col-sm-12 col-md-8 col-lg-5 col-xl-5 mx-auto mt-3 py-3 container">
      <form
        onSubmit={handleSignup}
        className="card border-0 rounded-0 shadow-lg"
      >
        <div className="pt-3 ps-4 ">
          <h1 className=" fw-bolder ">Sign up</h1>
          <p>Sign up and start managing your notes.</p>
        </div>
        <div className="card-body">
          <div className="row mb-2">
            <div className="col">
              <div className="formgroup__animated mb-2">
                <input
                  type="text"
                  id="firstname"
                  className="input__animated"
                  placeholder=" "
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  required
                />
                <label htmlFor="firstname" className="animated__label">
                  First Name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="formgroup__animated mb-2">
                <input
                  type="text"
                  id="lastname"
                  className="input__animated"
                  placeholder=" "
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  required
                />
                <label htmlFor="lastname" className="animated__label">
                  Last Name
                </label>
              </div>
            </div>
          </div>

          <div className="formgroup__animated mb-2">
            <input
              type="email"
              id="email"
              className="input__animated"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="off"
              required
            />
            <label htmlFor="email" className="animated__label">
              Email
            </label>
          </div>
          <div className="formgroup__animated mb-2">
            <input
              type="password"
              id="password"
              className="input__animated"
              placeholder=" "
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              autoComplete="off"
              required
            />
            <label htmlFor="password" className="animated__label">
              Password
            </label>
          </div>
          <div className="formgroup__animated mb-2">
            <input
              type="password"
              id="conpassword"
              className="input__animated"
              placeholder=" "
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}
              autoComplete="off"
              required
            />
            <label htmlFor="conpassword" className="animated__label">
              Confirm Password
            </label>
          </div>

          <button
            type="submit"
            className="btn  btn-primary fs-5 mt-3 w-100 rounded-pill"
          >
            Sign up
          </button>
          <hr />
          <p className="text-center">¿Already have an account?</p>
          <Link
            to="/login"
            className="btn btn-primary rounded-pill fs-5 w-100  "
          >
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
