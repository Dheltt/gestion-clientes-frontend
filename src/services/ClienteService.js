// Importamos axios, una librería para hacer solicitudes HTTP desde el navegador.
import axios from "axios";

// Esta constante almacena la URL base para acceder a la API REST de clientes.
// Aquí, la API está alojada en el servidor local en el puerto 8080.
const Cliente_BASE_REST_API_URL = "http://localhost:8080/api/v1/clientes";

// Creamos una clase llamada ClienteService.
class ClienteService {
    // Este método hace una solicitud GET a la URL de la API para obtener todos los clientes.
    getAllClientes() {
        // Usamos axios para hacer una solicitud GET a la URL de la API.
        // El método get devuelve una promesa que resolverá los datos de la respuesta.
        return axios.get(Cliente_BASE_REST_API_URL);
    }

    createClient(cliente){
        return axios.post(Cliente_BASE_REST_API_URL,cliente);
    }


    getClientById(clienteId){
        return axios.get(Cliente_BASE_REST_API_URL+"/"+clienteId);
    }

    updateClient(clienteId,cliente){
        return axios.put(Cliente_BASE_REST_API_URL+"/"+clienteId,cliente);
    }

    deleteClient(clientId){
        return axios.delete(Cliente_BASE_REST_API_URL+"/"+clientId);
    }
}

// Exportamos una instancia de ClienteService para que pueda ser utilizada en otras partes de la aplicación.
const clienteServiceInstance = new ClienteService();

export default  clienteServiceInstance;
