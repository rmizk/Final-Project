import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "./Profile.css";

const Services = () => {
  const { loading, users } = useSelector((state) => state.reducer);

  return (
    <div>
      <div className="info_container">
        <h1 className="profile">
          {" "}
          Bonjour <br /> {users.fName} {users.lName}{" "}
        </h1>

        <div className="image_container">
            <div className="imagetest">
            <img src="" alt=""  />


            </div>
        </div>

        <h4> Email : {users.email}</h4>
        <h4> Phone : {users.phone}</h4>

        <form>
          <div className="update_button">
            <Link to="/update">
              <input type="button" value="Mettre à jour" />
            </Link>
          </div>
        </form>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Services;
