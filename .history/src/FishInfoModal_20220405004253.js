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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Scientific Name: {props.scientificName}</p>
          <p>Common Name: {props.commonName}</p>
          <p>Lower Ph: {props.lowerPH}</p>
          <p>Upper Ph: {props.upperPH}</p>
          <p>Rec. Temp Low: {props.lowerTemp}</p>
          <p>Rec. Temp Upper: {props.upperTemp}</p>
          <p>Aggression to Other Species: {props.aggressiveOtherSpecies}</p>
          <p>Aggression to Same Species: {props.aggressiveSameSpecies}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FishInfoModal;
