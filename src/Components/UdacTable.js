import React from 'react'
import { Button, Table } from 'react-bootstrap';
import '../App.css';

const UdacTable = ({udaclist, deleteUdac}) => { 

  return(
    <Table hover responsive="lg">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        udaclist.length > 0 ? (
          udaclist.map(udac => (
          <tr key={udac.id}>
            <td>{udac.id}</td>
            <td>{udac.name}</td>
            <td>
              <Button variant="outline-secondary" size="sm">Edit</Button>
              <Button onClick={() => deleteUdac(udac.id)} 
              variant="outline-secondary" size="sm" >Delete</Button>
            </td>
          </tr>
        ))
        ) : (
          <tr>
          <td colSpan={3}>No udacs</td>
        </tr>
        )
      }
        
      </tbody>
    </Table>
    )
  }

export default UdacTable