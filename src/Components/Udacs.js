import React from 'react'
import { DropdownButton, Dropdown} from 'react-bootstrap';
import '../App.css';

const Udacs = ({udacs, imagePreview}) => { 

  return(
        <div>
            <br></br>
            
            <DropdownButton id="dropdown-basic-button" title="Please Choose Udac" onSelect={(evt) => imagePreview(evt)}>
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
         </div>

    )
  }

export default Udacs