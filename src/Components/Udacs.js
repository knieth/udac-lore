import React from 'react'
import { Button, Table, Image, DropdownButton, Dropdown, Row , Col, Form } from 'react-bootstrap';
import '../App.css';

const Udacs = ({udacs, imagePreview}) => { 

  return(
        <Row>
        <br></br>
            <Col>
                <DropdownButton id="dropdown-basic-button" title="Udacs" onSelect={(evt) => imagePreview(evt)}>
                {
                    udacs.length > 0 ? (
                        udacs.map( udac => (
                            <Dropdown.Item key={udac.id} eventKey={udac.id}>{udac.name}</Dropdown.Item>
                        ))
                    ) : (
                        <p>No Udacs</p>
                    )
                }
                </DropdownButton>
            </Col>
            <Col>
                
            </Col>
         </Row>

    )
  }

export default Udacs