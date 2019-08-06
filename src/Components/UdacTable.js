import React from 'react'
import { Button, Table } from 'react-bootstrap';
import '../App.css';
const UdacTable = ({udaclist, deleteUdac, updateUdac , handleUpdateShow}) => { 

  return(
    <div>
      
      <Table hover responsive  size="md">
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
            udaclist.map((udac, index) => (
            <tr key={udac.id}>
              <td >{index + 1}</td>
              <td >{udac.name}</td>
              <td>
                
                <Button onClick={() => deleteUdac(udac.id)} 
                  variant="light" className="text-danger" size="sm" >Delete
                </Button>
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
    </div>
    )
  }

export default UdacTable