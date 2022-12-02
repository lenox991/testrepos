import React from 'react'
import { Modal, ModalBody, ModalHeader, Table, Button, ModalFooter } from "reactstrap";
const User = ( { data, mostrarmodal,setmostrarnodal } ) => {
    
return(
    <Modal isOpen= {mostrarmodal} triped responsive>
        <ModalHeader>
            Listado de Usuarios
            
        </ModalHeader>
   <ModalBody>
   <Table striped responsive>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Webside</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
{
    (data.length < 1 ) ? (<tr><td colSpan="5"> Sin Registros</td></tr>) : 
    (
        data.map((item) => (
                <tr key={item.id}><td width= "1" height= "1">
                
                <img src= "https://picsum.photos/200/200?random=1" width= "75" height= "50"/>   
               
                               
                </td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                    </tr>
        )
                

)

    )


}
    </tbody>
</Table>
   </ModalBody>
   <ModalFooter>
     <Button size ="small" color = "danger" onClick= {()=> setmostrarnodal(!mostrarmodal)}> Cerrar
            </Button>
   </ModalFooter>

</Modal>

    )
}
export default User;