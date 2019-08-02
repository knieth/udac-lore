import React from 'react'
import {  Image, Card} from 'react-bootstrap';
import '../App.css';

const Preview = ({link}) => { 

  return(
        <div>
            {
                link.length > 0 ? (
                    <Card>
                        <Card.Body>
                        <Card.Title className="text-center">
                                <h4>{link[0].name}</h4>
                        </Card.Title>
                        </Card.Body>
                        <Card.Img variant="bottom" src={link[0].link} />
                    </Card>
                ) :
                <p>Preview not available</p>
            }
        </div>

    )
  }

export default Preview