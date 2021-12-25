import { useRef } from "react";
import toast from "react-hot-toast";
import { SendRecoverEmail } from "../../services/auth";

function RecoverPassword() {
  const email = useRef("");
  const handleEmailSending = async (e) => {
    e.preventDefault();
    const results = await SendRecoverEmail(email.current.value);
    if (results.status) {
      toast.success("An email with instructions has been sent to this email");
    } else {
      toast.error(results.statusText);
    }
  };
  return (
    <div className="row mt-5 vh-100 w-100">
      <div className="col col-lg-4 col-md-4 bg-custom-1 d-sm-none d-none d-lg-block d-md-none d-xl-block">
        <div className=" d-flex flex-column gap-2 text-center h-100 justify-content-center rounded ">
          <h1 className="display-4 my-4 font-weight-bolder">Ooops!</h1>
          <h1 className="display-5 my-4">
            ¿You forgot your password?, No problem you can recover it using your
            email.
          </h1>
        </div>
      </div>
      <div className="col-lg-5 col-xl-4 col-md-8 col-12 mx-auto my-auto">
        <div className="container">
          <div id="recoverpassword-card" className="card">
            <h5
              className="card-header bg-custom-4 text-center text-white py-3 w-100"
              style={{ fontWeight: "bold", fontSize: "30px" }}
            >
              Email address account
            </h5>
            <div className="card-body">
              <div className="card-text text-center d-lg-none d-xl-none">
                ¿You forgot your password?, No problem, recover it with your
                email.
              </div>
              <form onSubmit={handleEmailSending}>
                <div className="input-group input-group-lg mb-3 mt-2">
                  <input
                    className="form-control mb-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    required
                    ref={email}
                  />
                </div>
                <button
                  type="submit"
                  id="send"
                  className="btn btn-primary w-100 btn-lg"
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
}

export default RecoverPassword;
