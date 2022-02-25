import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Update.css";

const Update = () => {
  const { users } = useSelector((state) => state.reducer);

  return (
    <div>
      <br />
      <br />

      <h2>Mettre a jour votre profil</h2>

      <div className="signup-box signup-box2">
        <form action="">
          <label htmlFor="">Email : </label>
          <input type="email" placeholder="" value={users.email} />

          <label htmlFor="">Phone : </label>
          <input type="text" placeholder="" value={users.phone} />

          <input type="button" value="enregistrer" />

          <Link to="/Profile">
            <input type="button" value="annuler" />
          </Link>
        </form>
      </div>

      {/* <div className="info_container">
            
            
            <div className="signup-box">
              <label>Email :</label>
              <input type="text" value={users.email} />
              <label>phone :</label>
              <input type="email" value={users.phone} />

              <input
                className="button"
                type="button"
                value="enregistrer"
              />
            </div>
          </div> */}
    </div>
  );
};

export default Update;
