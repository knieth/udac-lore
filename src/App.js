import React, { useState, useEffect } from 'react';
import UdacTable from './Components/UdacTable';
import AddUdacForm from './Components/AddUdac';
import Udacs from './Components/Udacs';
import ImagePreview from './Components/Preview';
import { Container, Row, Col } from 'react-bootstrap';
import {base} from './base';
import './App.css';


const App = () => {

  

  const [udacs, setUdacs] = useState([])

  const [preview, setPreview] = useState([])

  const addUdac = udac => {
    udac.id = udacs.length + 1
    setUdacs([...udacs, udac])
  }

  const deleteUdac = id => {
    setUdacs(
      udacs.filter(udac => 
        udac.id !== id))
  }

  const imagePreview = id => {
    setPreview(udacs.filter(udac => 
      udac.id == id))
  }

  return (
    <Container className="App">
      <Row >
        <Col md={12}>
          <h1>UDAC Lore</h1>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12}>
          <div className="flex-large">
            <h4 className="text-secondary">Add UDAC</h4>
            <AddUdacForm addUdac={addUdac}/>
          </div>
        </Col>
        <Col md={6} xs={12}>
        <div className="flex-large">
          <h4 className="text-secondary">UDAC List</h4>
          <UdacTable udaclist={udacs} deleteUdac={deleteUdac}/>
        </div>
        </Col>
      </Row>
      <hr></hr>
     
      <Row>
        <Col xs={12} md={6}>
          <div>
            <h4>Preview</h4>
            <Udacs udacs={udacs} imagePreview={imagePreview}/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <ImagePreview link={preview}/>
          </div>
        </Col>
      </Row>
     
        
      
    </Container>
  );
}

export default App;
