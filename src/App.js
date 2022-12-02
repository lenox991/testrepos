import { useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import Inicio from './components/Inicio'
import User from './components/User'
import axios from "axios";

  
const App = () => {
  
  const [user,setUser] = useState([])
  const [mostrarmodal,setmostrarnodal] = useState(false);
    const viewUser = async() => {
    
    const response = await fetch("http://localhost:3001/api/User/AllUser"  
    );
    
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setUser(data)
    }
    
    else {
      console.log('error en la lista') }


    }
  
  useEffect(() => {
    viewUser()

  },[])
  
  return (
    
    <Container>
      <Row className="mt-5">
      <Col sm = "12">
        <Card>
          <CardHeader>
            <h5>
              Lista de Usuarios
            </h5>
          </CardHeader>
          <CardBody>
            <Button size ="small" color = "success" onClick= {()=> setmostrarnodal(!mostrarmodal)}> Listado Usuarios
            </Button>
            <hr></hr>
            <User data={user} 
            mostrarmodal={mostrarmodal}
            setmostrarnodal={setmostrarnodal}
            />

          </CardBody>
        </Card>
      </Col>

      </Row>
    </Container>
    );

  }
export default App;
