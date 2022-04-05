import React, { useState, Component } from "react";

import { Offcanvas, Table, Button, Modal } from "react-bootstrap";
import wishlistIcon from "./images/wishlist.png";
import { Fish } from "./classes/Tank";

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
        <Modal.Body>{fishProp.scientificName}</Modal.Body>
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
