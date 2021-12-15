import { useEffect, useState } from "react";
import EditProfileCard from "../../components/profile/EditProfileCard";
import ProfileCard from "../../components/profile/ProfileCard";
import ProfileSettings from "../../components/profile/ProfileSettings";

const Profile = () => {
  const [user, setUser] = useState({});
  const [onEditing, setOnEditing] = useState(false);
  const [onConfig, setOnConfig] = useState(false);

  const setUserDataHandler = () => {
    const sessionData = JSON.parse(window.localStorage.getItem("userSession"));
    setUser(sessionData);
  };
  const toggleEditing = () => {
    setOnEditing(!onEditing);
  };
  const toggleConfig = () => {
    setOnConfig(!onConfig);
  };

  useEffect(() => {
    setUserDataHandler();
    return () => {
      setUser({});
    };
  }, []);
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-6 mx-auto">
          <div className="card shadow-lg">
            {onEditing === false && onConfig === false ? (
              <ProfileCard
                toggleConfig={toggleConfig}
                toggleEditing={toggleEditing}
                user={user}
              />
            ) : onEditing === true ? (
              <EditProfileCard toggleEditing={toggleEditing} user={user} />
            ) : (
              <ProfileSettings toggleConfig={toggleConfig} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
