/*
Name: Ashok Sasitharan 
Student ID: 10075484
Purpose: This component is a button that shows the current fish in the tank
*/
import React, { useState, Component } from "react";
import { Offcanvas, Table } from "react-bootstrap";
import wishlistIcon from "./images/wishlist.png";

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
          <Offcanvas.Title>Aquarium List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Fish Common Name</th>
                <th>Fish Scientific Name</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((item) => {
                return (
                  <tr key={setTimeout(getKey(item.id), 1)}>
                    <td>{item.commonName}</td>
                    <td>{item.scientificName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Wishlist;
