import React, { useState, Component } from "react";

import { Offcanvas, Table } from "react-bootstrap";
import wishlistIcon from "./images/wishlist.png";

const Wishlist = () => {
  let [userList, setUserList] = useState([]);
  const getUserList = () => {
    if (sessionStorage.length > 0) {
      arrFish = JSON.parse(sessionStorage.getItem("fishNames"));
      setUserList(arrFish);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <button onClick={toggleShow} className="back-to-top ">
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
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="w-50 text-center"
          >
            <thead>
              <tr>
                <th>Fish Common Name</th>
                <th>Fish Scientific Name</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((val, key) => {
                return (
                  <tr key={val.fishMatchID}>
                    <td>{val.fishMatchCommonName}</td>
                    <td>{val.fishMatchScientificName}</td>
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
