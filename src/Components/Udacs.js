import React from 'react'
import { DropdownButton, Dropdown, Form, ListGroup} from 'react-bootstrap';
import '../App.css';

const Udacs = ({udacs, imagePreview, handleSearch, search, handleSelectSuggestion}) => { 

  return(
        <div className="search-container">
            <br></br>
            {/*
            <DropdownButton id="dropdown-basic-button"  title="Please Choose Udac" onSelect={(evt) => imagePreview(evt)}>
            {
                udacs.length > 0 ? (
                    udacs.map( udac => (
                        <Dropdown.Item key={udac.id} eventKey={udac.id}>{udac.name}</Dropdown.Item>
                    ))
                ) : (
                    <p>No Udacs</p>
                )
            }
            </DropdownButton> */}
            

           
                
                    <Form.Control id="dropdown-basic-button" type="text" onChange={(evt) => handleSearch(evt.target.value)} placeholder="Search" autoComplete="off"/>
                
            <br></br>
            {
            search.length > 0 ? ( <p className="text-center" >Result Found</p>) : ('')
                    }
            <ListGroup className="suggestion-list">
            
                {
                    search.length > 0 ? (
                        
                        search.map( udac => (
                            <ListGroup.Item key={udac.id} 
                            action
                            onClick={() => handleSelectSuggestion(udac.name)}
                            >{udac.name}</ListGroup.Item>
                        ))
                    ) : (
                        ''
                    )
                }
            </ListGroup>
            
         </div>

    )
  }

export default Udacs