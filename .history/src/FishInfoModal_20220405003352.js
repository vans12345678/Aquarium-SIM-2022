import React, { useState, Component } from "react";

import { Offcanvas, Table, Button, Modal } from "react-bootstrap";
import wishlistIcon from "./images/wishlist.png";
import { Fish } from "./classes/Tank";
const fishProp = {
  id: id,
  scientificName: scientificName,
  commonName: commonName,
  averageSize: averageSize,
  lowerPH: lowerPH,
  upperPH: upperPH,
  lowerTemp: lowerTemp,
  upperTemp: upperTemp,
  aggressiveSameSpecies: aggressiveSameSpecies,
  aggressiveOtherSpecies: aggressiveOtherSpecies,
  locationTank: locationTank,
  image: image,
  fishKey: fishKey,
};
const FishInfoModal = (fishProp) => {
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
        <Modal.Body>{props.name}</Modal.Body>
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
