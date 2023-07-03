/*
Name: Ashok Sasitharan 
Student ID: 10075484
Purpose: This component is a button that creates an overlay with the stats of the tank
*/
import React, { useState, Component } from "react";
import { Offcanvas, Table } from "react-bootstrap";
import wishlistIcon from "./images/wishlist.png";
import { Tank } from "./classes/Tank";

const TankStats = () => {
  //states
  let [inputLength, setLength] = useState(0);
  let [inputWidth, setWidth] = useState(0);
  let [inputHeight, setHeight] = useState(0);
  let [tankCapacity, setTankCapacity] = useState(0);
  let [fishTank, setFishTank] = useState(
    new Tank(inputLength, inputWidth, inputHeight, 0, 0, 0, 0, 0, 0, 0)
  );
  let tempTank = new Tank(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  const getFishTank = () => {
    let temp = JSON.parse(sessionStorage.getItem("tank"));

    //If tank session variable has stuff in it
    if (temp != null) {
      //get the tank info from the session storage and call state functions
      tempTank = JSON.parse(sessionStorage.getItem("tank"));
      setFishTank(tempTank);
      setLength(tempTank.length);
      setWidth(tempTank.width);
      setHeight(tempTank.height);
      setTankCapacity(Math.round(tempTank.capacity));
    }
  };

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
          <Offcanvas.Title>Tank Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Tank Lower Temp</th>
                <th>Tank Upper Temp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{fishTank.lowerTemp}&#8451;</td>
                <td>{fishTank.upperTemp}&#8451;</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered>
            <thead>
              <tr>
                {/* this.upperTemp = upperTemp; this.lowerTemp = lowerTemp;
                this.lowerPH = lowerPH; this.upperPH = upperPH; */}
                <th>Tank Lower pH</th>
                <th>Tank Upper pH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{fishTank.lowerPH}pH</td>
                <td>{fishTank.upperPH}pH</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered>
            <thead>
              <tr>
                {/* this.upperTemp = upperTemp; this.lowerTemp = lowerTemp;
                this.lowerPH = lowerPH; this.upperPH = upperPH; */}
                <th>Tank Size (Litres)</th>
                <th>Tank Dimensions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{fishTank.size} L</td>
                <td>
                  {fishTank.length}cm x {fishTank.width}cm x {fishTank.height}cm
                </td>
              </tr>
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TankStats;
