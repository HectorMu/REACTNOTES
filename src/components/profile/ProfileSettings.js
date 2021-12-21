import { useState } from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import DeleteAccountForm from "./DeleteAccountForm";

const ProfileSettings = ({ toggleConfig, setUser }) => {
  const [onPasswordChange, setOnPasswordChange] = useState(false);
  const [onDeleteAccount, setOnDeleteAccount] = useState(false);

  const togglePasswordChange = () => {
    setOnPasswordChange(!onPasswordChange);
  };
  const toggleDeleteAccount = () => {
    setOnDeleteAccount(!onDeleteAccount);
  };

  return (
    <div className="shadow py-2">
      <div className="text-center shadow py-3 mb-4">
        <i className="fas fa-user fa-5x"></i>
        <h3 className="text-center mt-3">Profile settings</h3>
      </div>
      <div className="row container">
        <div className="col-12 col-lg-6">
          <div className="text-center shadow pt-1 pb-2 container mb-4">
            <h4 className=" mt-3">
              {onPasswordChange === true ? "Changing password " : "Security"}
            </h4>

            <div className="d-flex justify-content-center">
              {onPasswordChange === false ? (
                <button
                  onClick={togglePasswordChange}
                  className="btn btn-primary"
                >
                  <i className="fas fa-lock"></i> Change password
                </button>
              ) : (
                <ChangePasswordForm
                  togglePasswordChange={togglePasswordChange}
                  toggleConfig={toggleConfig}
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="text-center shadow pt-1 pb-2 container">
            <h4 className=" mt-3">Account</h4>
            {onDeleteAccount === false ? (
              <button onClick={toggleDeleteAccount} className="btn btn-danger">
                <i className="fas fa-trash"></i> Delete account
              </button>
            ) : (
              <DeleteAccountForm
                toggleDeleteAccount={toggleDeleteAccount}
                setUser={setUser}
              />
            )}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end container gap-3 mt-4">
        <button
          onClick={toggleConfig}
          className="btn btn-primary rounded-circle"
        >
          <i className="fas fa-arrow-circle-left"></i>{" "}
        </button>
      </div>
    </div>
  );
};
export default ProfileSettings;
