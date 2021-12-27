import { useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { SendRecoverEmail } from "../../services/auth";

const RecoverPasswordForm = () => {
  const email = useRef("");
  const handleEmailSending = async (e) => {
    e.preventDefault();
    const results = await SendRecoverEmail(email.current.value);
    if (results.status) {
      toast.success("An email with instructions has been sent to this email.");
    } else {
      toast.error(results.statusText);
    }
  };
  return (
    <div className="col-12 col-sm-12 col-md-8 col-lg-5 col-xl-5 mx-auto mt-5 py-5 container">
      <form
        onSubmit={handleEmailSending}
        className="card border-0 rounded-0 shadow-lg"
      >
        <div className="pt-3 ps-4 ">
          <h1 className=" fw-bolder ">Account recover</h1>
          <p>
            Enter your email address, await for our email and follow the
            instructions.
          </p>
        </div>
        <div className="card-body">
          <div className="input-group mb-2">
            <input
              className="form-control mb-2"
              type="email"
              placeholder="Your email goes here..."
              required
              ref={email}
            />
          </div>

          <button
            type="submit"
            className="btn  btn-primary fs-5 mt-3 w-100 rounded-pill"
          >
            Recover my account
          </button>
          <hr />
          <Link
            to="/login"
            className="btn btn-primary rounded-pill fs-5 w-100  "
          >
            <i className="fas fa-arrow-left"></i> Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RecoverPasswordForm;
