import React, { useEffect, useState } from "react"; // Importa React y los hooks useEffect y useState
import ClienteService from "../services/ClienteService"; // Importa el servicio ClienteService
import { Link } from "react-router-dom";

// Define el componente ListClientesComponent
export const ListClientesComponent = () => {
    // Declara una variable de estado 'clientes' y su función para actualizar 'setClientes'
    // Inicialmente, 'clientes' es un arreglo vacío
    const [clientes, setClientes] = useState([]);

    // useEffect se ejecuta cuando el componente se monta por primera vez
    useEffect(() => {
        listClients();
    }, []); // El arreglo vacío indica que este efecto solo se ejecutará una vez, cuando el componente se monte
    
    const listClients =()=>{
        ClienteService.getAllClientes()
            .then(response => {
                // Si la llamada a la API es exitosa, actualiza el estado 'clientes' con los datos obtenidos
                setClientes(response.data);
                console.log(response.data); // Imprime los datos en la consola
            })
            .catch(error => {
                // Si ocurre un error, imprime un mensaje de error en la consola
                console.log("error papuuu",error);
            });
    }
    const deleteClient = (clienteId) =>{
        // Llama al método 'getAllClientes' del servicio ClienteService
        ClienteService.deleteClient(clienteId).then((response) =>{
            listClients();
        }).catch(error =>{
            console.log(error);
        })
    }
    return(
        <div className="tabla">
            <h2 className="text-center">Lista Empleados</h2>
            <Link to="/add-client" className="btn btn-primary mb-2">Agregar cliente</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>acciones</th>
                </thead>
                <tbody>
                    {
                        clientes.map(cliente =>
                            <tr key={cliente.id}>
                                <td>{cliente.id}</td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.apellido}</td>
                                <td>{cliente.email}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-client/${cliente.id}`}>actualizar</Link>
                                    <button className="btn btn-danger" onClick={  () => deleteClient(cliente.id)}>Eliminar Cliente</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
//esto es para poder usarlo desde otras clases
export default ListClientesComponent