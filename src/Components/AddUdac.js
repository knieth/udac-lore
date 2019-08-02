import React from 'react'
import { Form, Button } from 'react-bootstrap';
import '../App.css';

const AddUdac = (props) => {

const Add = (e) => {
    e.preventDefault();
    let udacName = e.target.formUdacName.value
    let udaclink = e.target.formImageLink.value

    if(udacName !== '' && udaclink !== ''){

        let udac ={
            name: udacName, 
            link: udaclink 
        }

        props.addUdac(udac);
        e.target.formUdacName.value = ""
        e.target.formImageLink.value = ""
    }
    else{
        alert('Put some values damn it!')
    }
    
}

return (
    <div>
        <Form onSubmit={Add}>
            <Form.Group controlId="formUdacName">
                <Form.Label>Udac Name</Form.Label>
                <Form.Control type="text" placeholder="Enter udac name" />
            </Form.Group>
           
            <Form.Group controlId="formImageLink">
                <Form.Label>Image Link</Form.Label>
                <Form.Control type="text" placeholder="Enter image link" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
)

} 

export default AddUdac