import React from 'react'
import {  Modal, Button, Form} from 'react-bootstrap';
import '../App.css';
const LoginModal = ({show, handleClose, handleLogin}) => { 

  return(
        <div>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

            </Modal.Body>
          </Modal>
        </div>

    )
  }

export default LoginModal