import React, { useState, Component } from "react";

import { Offcanvas, Table } from "react-bootstrap";
import wishlistIcon from "./images/wishlist.png";
import { Tank } from "./classes/Tank";

const TankStats = () => {
  // let arrFish = "";
  // let [userList, setUserList] = useState([]);
  const getFishTank = () => {
    let temp = JSON.parse(sessionStorage.getItem("tank"));

    //If tank session variable has stuff in it
    if (temp != null) {
      tempTank = JSON.parse(sessionStorage.getItem("tank"));
      setFishTank(tempTank);
      setLength(tempTank.length);
      setWidth(tempTank.width);
      setHeight(tempTank.height);
      setTankCapacity(Math.round(tempTank.capacity));
      // console.log("Fish tank present");
    }
  };

  // function getKey(id) {
  //   const d = new Date();
  //   let ms = d.getMilliseconds();

  //   id = id.toString() + "_" + ms;
  //   console.log(id);

  //   return id;
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const clickFunc = () => {
    getFishTank();
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

export default TankStats;
