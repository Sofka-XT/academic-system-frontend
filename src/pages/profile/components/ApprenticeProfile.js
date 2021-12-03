import React from "react";
import "./ApprenticeProfile.css";

const ApprenticeProfile = ({ profile }) => {
  return (
    <>
      {profile && (
        <div className="ApprenticeProfileContainer">
          <div className="profile">
            <div className="profile-left">
              <img
                src="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                alt="profile-pic"
              />
            </div>

            <div className="profile-datos">
              <div>
                <h1>{profile.apprenticeName}</h1>
              </div>

              <div className="profile-data">
                <ul>
                  <li>
                    <span className="profile-stat-count">Celular: </span>{" "}
                    {profile.phoneNumber}
                  </li>
                  <li>
                    <span className="profile-stat-count">Correo: </span>
                    {profile.email}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApprenticeProfile;
