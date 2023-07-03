import React, { useState, Component } from "react";

import { Offcanvas, Table } from "react-bootstrap";
import wishlistIcon from "./images/wishlist.png";
import { Fish } from "./classes/Fish";
const Wishlist = () => {
  let arrFish = "";
  let [userList, setUserList] = useState([]);
  const getUserList = () => {
    if (sessionStorage.length > 0) {
      arrFish = JSON.parse(sessionStorage.getItem("fishNames"));
      setUserList(arrFish);
    }
  };

  function getKey(id) {
    const d = new Date();
    let ms = d.getMilliseconds();

    id = id.toString() + "_" + ms;
    console.log(id);

    return id;
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const clickFunc = () => {
    getUserList();
    toggleShow();
  };

  return (
    <>
      <button onClick={clickFunc} className="back-to-top ">
        <img className="arrowimg" src={wishlistIcon} alt="submit" />
      </button>
      <Offcanvas
        scroll={true}
        backdrop={false}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <table>
            <thead>
              <tr>
                <th>Fish Common Name</th>
                <th>Fish Scientific Name</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((val, key) => {
                console.log(userList);
                return (
                  <tr key={getKey(val.fishMatchID)}>
                    console.log(getKey(val.fishMatchID))
                    <td>{val.fishMatchCommonName}</td>
                    <td>{val.fishMatchScientificName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Wishlist;
