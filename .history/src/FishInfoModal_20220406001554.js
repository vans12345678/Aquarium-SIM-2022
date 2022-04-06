/*
Name: Ashok Sasitharan 
Student ID: 10075484
Purpose: This component creates an overlay that displays fish info when the button is clicked
*/
import React, { useState, Component } from "react";
import { Offcanvas, Table, Button, Modal } from "react-bootstrap";
import wishlistIcon from "./images/wishlist.png";
import { Fish } from "./classes/Tank";

const FishInfoModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="listBtn" variant="primary" onClick={handleShow}>
        Fish Info
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.commonName} Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="w-50 text-center"
          >
            <tbody>
              <tr>
                <td>Common Name: </td>
                <td>{props.commonName}</td>
              </tr>
              <tr>
                <td>Scientific Name: </td>
                <td>{props.scientificName}</td>
              </tr>
              <tr>
                <td>Average Size: </td>
                <td>{props.fishAverageSize} cm</td>
              </tr>
              <tr>
                <td>Recommended PH: </td>
                <td>
                  {props.lowerPH} - {props.upperPH}
                </td>
              </tr>
              <tr>
                <td>Recommended Temperature: </td>
                <td>
                  {props.lowerTemp} - {props.upperTemp} °C
                </td>
              </tr>
              <tr>
                <td>Aggression to its own species: </td>
                <td>{props.aggressiveSameSpecies}</td>
              </tr>
              <tr>
                <td>Aggression to its other species: </td>
                <td>{props.aggressiveOtherSpecies}</td>
              </tr>
              <tr>
                <td>Location in the tank: </td>
                <td>{props.fishLocationTank}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default FishInfoModal;
