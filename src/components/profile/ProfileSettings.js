import { useState } from "react";

const ProfileSettings = ({ toggleConfig }) => {
  const [onPasswordChange, setOnPasswordChange] = useState(false);

  const togglePasswordChange = () => {
    setOnPasswordChange(!onPasswordChange);
  };
  return (
    <div className="card-body">
      <div className="text-center shadow py-3">
        <i className="fas fa-user fa-5x"></i>
        <h3 className="text-center mt-3">Profile settings</h3>
      </div>

      <div className="text-center shadow pt-1 pb-2 container">
        <h4 className=" mt-3">
          {onPasswordChange === true ? "Changing password " : "Security"}
        </h4>

        <div className="d-flex justify-content-center">
          {onPasswordChange === false ? (
            <button onClick={togglePasswordChange} className="btn btn-primary">
              <i class="fas fa-lock"></i> Change password
            </button>
          ) : (
            <form className="w-100">
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Current password"
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="New password"
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Confirm new password"
              />
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-primary rounded-circle">
                  <i class="fas fa-save"></i>{" "}
                </button>
                <button
                  onClick={togglePasswordChange}
                  className="btn btn-danger rounded-circle"
                >
                  <i class="fas fa-times"></i>{" "}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-end gap-3 mt-4">
        <button
          onClick={toggleConfig}
          className="btn btn-primary rounded-circle"
        >
          <i class="fas fa-arrow-circle-left"></i>{" "}
        </button>
      </div>
    </div>
  );
};
export default ProfileSettings;
