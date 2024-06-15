import React, { useEffect, useState } from "react";
import '../addClient.css'
import clienteServiceInstance from "../services/ClienteService";
import { Link, useNavigate, useParams } from "react-router-dom";

export const AddClientComponent = () =>{

    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [email,setEmail] = useState("");
    const navigate  = useNavigate();
    const {id} = useParams();

    const saveOrUpdateClient = (e) =>{
        e.preventDefault();

        if(id){//si el id es  null
            const cliente = {nombre,apellido,email};    
            clienteServiceInstance.updateClient(id,cliente).then(response =>{
                console.log(response.data);
                navigate("/clientes")
            }).catch(error =>{
                console.log(error);
            })
        }else{
            const cliente = {nombre,apellido,email};    
            clienteServiceInstance.CreateClient(cliente).then(response =>{
                console.log(response.data);
                navigate("/clientes")
            }).catch(error =>{
                console.log(error);
            })
        }
        
    }

    useEffect(() =>{
        clienteServiceInstance.getClientById(id).then((response) =>{
            setNombre(response.data.nombre);
            setApellido(response.data.apellido);
            setEmail(response.data.email);
        }).catch(error =>{
            console.log(error);
        });
    },[]);


    const title = () =>{
        if(id){
            return <h2 className="text-center">actualiza nombre</h2>
        }else{
            return <h2 className="text-center">Agregar Cliente</h2>
        }
    }
    return (
        <div>
            <h1>{title()}</h1>
            <section>
                <form >
                    <div className="label1">
                        <label id="lbl_name" >nombre del cliente </label>
                        <input id="inpt_name" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div className="label2">
                        <label id="lbl_aplld"  >Apellido del cliente </label>
                        <input id="inpt_aplld" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                    </div>
                    <div className="label3">
                        <label id="lbl_email"> email del cliente  </label>
                        <input id="inpt_email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="botones">
                        <button className="btn centrado1 btn-success" onClick={(e)=>saveOrUpdateClient(e)}>GuardarCliente</button>
                        &nbsp;&nbsp;
                        <Link to='/clientes' className="btn centrado2 btn-danger">Volver</Link>
                    </div>
                </form>
            </section> 
        </div>
    )
}

export default AddClientComponent;