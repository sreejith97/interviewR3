import React from "react";

import ProfleCard from "../components/ProfleCard";

const ProfilePage = () => {
  return (
    <div className="main-container">
      <div className="profile-top">
        <div className="cover-text-content">
          <h1>Lorem ipsum dolor</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <ProfleCard />
      </div>
      {/* <Profile /> */}
    </div>
  );
};

export default ProfilePage;
