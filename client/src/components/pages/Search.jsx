import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/actions";
import "./Search.css";

const Search = () => {
  const { list, loading } = useSelector((state) => state.listreducer);

  const [membre, setmembre] = useState("");
  //   const [filteredList, setFilteredList] = useState([])

  console.log(list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search());
  }, [membre, dispatch]);

  // useEffect(() => {

  // setFilteredList(fl)

  // }, [membre])

  const filterMember = (e) => setmembre(e.target.value);

  return (
    <div>
      <div className="serach_box">
        <h2> Rechercher un membre </h2>
        <input type="text" value={membre} onChange={filterMember} />
      </div>
      {loading ? (
        <h2> </h2>
      ) : (
        <>
          {list
            ?.filter(
              (m) =>
                m.fName.toLowerCase().includes(membre.toLowerCase()) ||
                m.lName.toLowerCase().includes(membre.toLowerCase())
            )
            .map((el) => (
              <div>
                {/* <div className="image_container">
                <div className="imagetest">
                <img src="" alt="" />
                </div>
              </div> */}
                <h1> {el.lName + " " + el.fName} </h1>
                <h4> Email : {el.email}</h4>
                <h4> Phone : {el.phone}</h4>
              </div>
            ))}
        </>
      )}

      <br />
      <br />
      <br />
    </div>
  );
};

export default Search;
