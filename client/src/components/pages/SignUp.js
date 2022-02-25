import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../redux/actions";
import "./SignUp.css";

const SignUp = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const { loading, users } = useSelector((state) => state.reducer);

  // console.log(users);

  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      fName,
      lName,
      email,
      phone,
      password,
    };

    dispatch(registerUser(newUser));
  };

  return (
    <div className="background">
      <div className="center">
        {loading ? (
          <h1> </h1>
        ) : users ? (
          <Redirect to="/sign-up"></Redirect>
        ) : (
          <>
            <div className="signup-box">
              <h2>S'inscrire</h2>

              <form action="">
                <label htmlFor="">Nom</label>
                <input
                  type="text"
                  placeholder=""
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                />

                <label htmlFor="">Prénom</label>
                <input
                  type="text"
                  placeholder=""
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                />

                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />

                <label htmlFor="">phone</label>
                <input
                  type="email"
                  placeholder=""
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />

                <label htmlFor="">Mot de passe</label>
                <input
                  type="password"
                  placeholder=""
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />

                <input
                  type="button"
                  value="Inscription"
                  onClick={handleSubmit}
                />
              </form>

              {/* <p>
              Vous avez déja un compte? <br />
              <Link to="/Sign-up" className="nav-links">
                <a href="" className="connect-link"> Se connecter ici </a>
              </Link>
            </p> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
