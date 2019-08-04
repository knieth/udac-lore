import React, { useState, useEffect } from 'react';
import UdacTable from './Components/UdacTable';
import AddUdacForm from './Components/AddUdac';
import Udacs from './Components/Udacs';
import ImagePreview from './Components/Preview';
import { Container, Row, Col, Button, Badge, Modal, Form } from 'react-bootstrap';
import firebase from './firebase';
import './App.css';

function useUdacs() {
  const [udacs, setUdacs] = useState([])
  

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('udacs')
      .onSnapshot((snapshot) => {
        const newUdacs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setUdacs(newUdacs)
      })

      return () => unsubscribe()
  }, [])

  return udacs
}


const App = () => {

  const udacs = useUdacs()
  const [preview, setPreview] = useState([])
  const [showLogin, setshowLogin] = useState(false)
  const [adminMode, setadminMode] = useState(false)

  const handleClose = () => setshowLogin(false)
  const handleShow = () => setshowLogin(true)
  const handleLogin = (e) => {
    e.preventDefault()
    let userName = e.target.formUsername.value
    let password = e.target.formPassword.value
    if(userName.trim() === "admin" && password.trim() === "admin"){
      alert("Nice! Login Success")
      handleClose()
      setadminMode(true)
    } else{
      alert("Wrong Password! Damn it!")
    }
    
  }
  const handleLogout = () => {
    setadminMode(false)
  }

  const addUdac = udac => {
    //udac.id = udacs.length + 1
    //setUdacs([...udacs, udac])
    firebase
      .firestore()
      .collection('udacs')
      .add(udac)
  }

  const deleteUdac = id => {
    //setUdacs(
      //udacs.filter(udac => 
      //  udac.id !== id))
      firebase
      .firestore()
      .collection('udacs')
      .doc(id)
      .delete()
  }

  const updateUdac = id => {
    alert('not done yet damn it!')
  }

  const imagePreview = id => {
    setPreview(udacs.filter(udac => 
      udac.id == id))
  }

  return (
    <Container className="App">
      <Row >
        <Col md={11}>
          <h3 className="text-secondary"><span className="text-primary">UDAC</span> Lore {
            adminMode ? (
              <Badge variant="secondary">Admin</Badge>
            ) :(
              ''
            )
          }
          </h3>
          
        </Col>
        <Col md={1}>
          {
            adminMode ? (
              <Button variant="outline-secondary" onClick={handleLogout} size="sm">
              Logout
            </Button>
            ) : (
              <Button variant="outline-light" onClick={handleShow} size="sm">
                Login
              </Button>
            )
          }
          

          <Modal show={showLogin} onHide={handleClose}>
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

        </Col>
        
      </Row>
      <hr></hr>
      {
        adminMode ?  (
          <div>
            <Row>
              <Col md={4} xs={12}>
                <div className="flex-large">
                  <h4 className="text-secondary">Add Udac here</h4> 
                  <AddUdacForm addUdac={addUdac}/>
                </div>
              </Col>
              <Col md={8} xs={12}>
              <div className="flex-large">
                <h4 className="text-secondary">UDAC List</h4>
                <UdacTable udaclist={udacs} deleteUdac={deleteUdac} updateUdac={updateUdac}/>
              </div>
              </Col>
              
            </Row>
            <hr></hr>
          </div>
        ) : (
          ''
        )
      }
      
     
      <Row>
        <Col xs={12} md={12}>
            <div className="preview-container">
              <div className="preview-header text-center">
                <h4 className="text-secondary ">Learn any UDAC anytime</h4>
                <Udacs udacs={udacs} imagePreview={imagePreview}/>
              </div>
              <div className="preview-body">
                <ImagePreview link={preview}/>
              </div>
            </div>
        </Col>
      </Row>
     
        
      
    </Container>
  );
}

export default App;
