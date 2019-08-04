import React from 'react'
import {  Image, Card} from 'react-bootstrap';
import '../App.css';
import Cover from '../cover.svg'
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
                        {
                            link[0].link.includes("https") ? (
                                <Card.Img variant="bottom" src={link[0].link} />
                            ) : (
                                <p className="text-center text-secondary">Preview not available or link might not working</p>
                            )
                        }
                        
                    </Card>
                ) :
                <Image src={Cover} fluid />
            }
        </div>

    )
  }

export default Preview