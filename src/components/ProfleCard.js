import axios from "axios";
import React, { useEffect, useState } from "react";

const ProfleCard = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);

  const callApi = () => {
    try {
      setIsLoading(true);
      const fetchUser = async () => {
        const res = await axios.get("https://randomuser.me/api/", {});

        if (res.status === 200) {
          setIsLoading(false);
          setUser(res?.data?.results[0]);
          console.log(res?.data?.results[0]?.picture?.large);
        }
      };

      fetchUser();
    } catch (error) {
      alert("error", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div className="card-container">
        {isLoading === true ? (
          <>
            <div className="loading">
              <p>Loading...</p>
            </div>
          </>
        ) : (
          <>
            <div className="profile-image-container">
              <div className="profile-image">
                <img src={user?.picture?.large} alt="profile picture" />
              </div>
            </div>
            <div className="profile-body-container">
              <p style={{ textAlign: "center" }}>
                Hi my name is <br />
                <span
                  style={{ fontSize: "32px" }}
                >{`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}</span>
              </p>
              <button
                className="profile-button"
                style={{ margin: "10px 0" }}
                onClick={() => {
                  callApi();
                }}
              >
                Next
              </button>
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default ProfleCard;
