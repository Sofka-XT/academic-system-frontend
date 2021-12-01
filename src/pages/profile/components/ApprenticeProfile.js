import React from "react";
import "./ApprenticeProfile.css";

const ApprenticeProfile = ({ profile }) => {
  return (
    <>
      {profile && (
        <div class="ApprenticeProfileContainer">
          <div class="profile">
            <div class="profile-left">
              <img
                src="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                alt="profile-pic"
              />
            </div>

            <div class="profile-datos">
              <div>
                <h1>{profile.apprenticeName}</h1>
              </div>

              <div class="profile-data">
                <ul>
                  <li>
                    <span class="profile-stat-count">Celular: </span>{" "}
                    {profile.phoneNumber}
                  </li>
                  <li>
                    <span class="profile-stat-count">Correo: </span>
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
