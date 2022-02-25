import React, { useEffect, useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, search } from "../redux/actions";

export function Button() {
  const { loading, users, isAuth } = useSelector((state) => state.reducer);

  const { list  } = useSelector((state) => state.listreducer);

  // console.log(list);

  const dispatch = useDispatch();



  // const [user, setuser] = useState("")

  // useEffect(() => {
  //   dispatch(search());
    
  // }, [])
  



  return (
    <div>
      {loading ? (
        <h1> </h1>
      ) : isAuth === true ? (
        <>
          <Link to="search">

            <button className="btn"> Nos membres </button>
          </Link>

          <Link to="profile">
            <button className="btn">Profile</button>
          </Link>
          <Link to="/">
            <button className="btn" onClick={() => dispatch(logout())}>
              Se déconnecter
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link to="sign-up">
            <button className="btn">S'inscrire</button>
          </Link>
          <Link to="sign-in">
            <button className="btn">Se connecter</button>
          </Link>
        </>
      )}

      {/* <Link to="sign-up">
        <button className="btn">S'inscrire</button>
      </Link>
      <Link to="sign-in">
        <button className="btn">Se connecter</button>
      </Link>
      <Link to="/">
        <button
          className="btn"
          onClick={() => localStorage.removeItem("token")}
        >
          Se déconnecter
        </button>
      </Link> */}
    </div>
  );
}
