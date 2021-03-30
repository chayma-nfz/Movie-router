import React, { useState } from 'react'
import { Button, Modal, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const AddMovie = ({ AddMovie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [img ,setimg]=useState("");
  const [description,setdescription]=useState("");


  return (
    <div>
      <Button variant="primary" onClick={handleShow} >Add New Movies +
 </Button> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie :</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text"
              placeholder="Enter movie title .."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group >
            <Form.Label>Picture</Form.Label>
            <Form.Control type="text"
              placeholder="Enter movie picture .."
              onChange={(e) => setimg(e.target.value)}
            />
          </Form.Group>
          <Form.Group >
            <Form.Label>Description</Form.Label>
            <Form.Control type="text"
              placeholder="......."
              onChange={(e) => setdescription(e.target.value)}
            />
          </Form.Group>


          <Form.Group >
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number"
              placeholder="Enter movie rating .." min="1" max="5"
              onChange={(e) => setRating(e.target.value)}
            />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary"
            onClick={() => { AddMovie({ id: Math.random(), title, rating, img,description}); handleClose() }}>
            Add Movie
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie
