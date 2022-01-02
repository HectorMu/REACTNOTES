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
              <div class="formgroup__animated mb-2">
                <input
                  type="text"
                  id="firstname"
                  class="input__animated"
                  placeholder=" "
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  required
                />
                <label for="firstname" class="animated__label">
                  First Name
                </label>
              </div>
            </div>
            <div className="col">
              <div class="formgroup__animated mb-2">
                <input
                  type="text"
                  id="lastname"
                  class="input__animated"
                  placeholder=" "
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  required
                />
                <label for="lastname" class="animated__label">
                  Last Name
                </label>
              </div>
            </div>
          </div>

          <div class="formgroup__animated mb-2">
            <input
              type="email"
              id="email"
              class="input__animated"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="off"
              required
            />
            <label for="email" class="animated__label">
              Email
            </label>
          </div>
          <div class="formgroup__animated mb-2">
            <input
              type="password"
              id="password"
              class="input__animated"
              placeholder=" "
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              autoComplete="off"
              required
            />
            <label for="password" class="animated__label">
              Password
            </label>
          </div>
          <div class="formgroup__animated mb-2">
            <input
              type="password"
              id="conpassword"
              class="input__animated"
              placeholder=" "
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}
              autoComplete="off"
              required
            />
            <label for="conpassword" class="animated__label">
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
