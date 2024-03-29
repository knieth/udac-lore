import React, { useState, useEffect } from 'react';
import UdacTable from './Components/UdacTable';
import AddUdacForm from './Components/AddUdac';
import Udacs from './Components/Udacs';
import ImagePreview from './Components/Preview';
import LoginModal from './Components/LoginModal';

import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
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
  const [search, setSearch] = useState(udacs)
  const [showLogin, setshowLogin] = useState(false)
  //temporary
  const [adminMode, setadminMode] = useState(false)
  const [adminCredentials, setaadminCredentials] = useState({})
  
  const handleClose = () => setshowLogin(false)
  const handleShow = () => setshowLogin(true)
  const handleLogin = (e) => {
    e.preventDefault()
    setaadminCredentials({
      userName: "admin",
      password: "!udacloreadmiN01"
    })
    let userName = e.target.formUsername.value
    let password = e.target.formPassword.value
    if(userName.trim() === adminCredentials.userName && password.trim() === adminCredentials.password){
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


  const imagePreview = id => {
    setPreview(udacs.filter(udac => 
      udac.id == id))
  }

  const handleSearch = searchName => {
   // console.log(udac)
      
     setSearch(udacs.sort().filter(udac => 
      udac.name.toLowerCase().includes(searchName.toLowerCase()) ))
      setPreview(udacs.sort().filter(udac => 
        udac.name.toLowerCase() == searchName.toLowerCase()))
    
  }

  const handleSelectSuggestion = udacsuggestion =>{
    setPreview(udacs.sort().filter(udac => 
      udac.name.toLowerCase() == udacsuggestion.toLowerCase()))
  }

  return (
    <Container className="App">
      <Row >
        <Col md={11}>
          <h3 className="text-secondary "><span className="text-primary logo">Udac</span> Lore {
            adminMode ? (
              <Badge variant="secondary">Admin</Badge>
            ) :(
              ''
            )
          }
          </h3>
          <LoginModal show={showLogin} handleLogin={handleLogin} handleClose={handleClose}/>
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
                <UdacTable udaclist={udacs} deleteUdac={deleteUdac} />
    
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
                <h3 className="text-primary font-weight-bold">Learn any UDAC anytime</h3>
              <div className="searchBox-container">
                <Udacs udacs={udacs} imagePreview={imagePreview} handleSearch={handleSearch} search={search} handleSelectSuggestion={handleSelectSuggestion}/>
              </div>
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
