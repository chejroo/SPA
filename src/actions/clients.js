import axios from "axios";

//API URL

const apiURL = "http://localhost:3004";


//GET CLIENTS
export const FETCHING_CLIENTS_REQUEST = "FETCHING_CLIENTS_REQUEST";
export const FETCHING_CLIENTS_SUCCESS = "FETCHING_CLIENTS_SUCCESS";
export const FETCHING_CLIENTS_FAILURE = "FETCHING_CLIENTS_FAILURE";

//CREATE CLIENT

export const CREATE_CLIENT_REQUEST = "CREATE_CLIENT_REQUEST";
export const CREATE_CLIENT_SUCCESS = "CREATE_CLIENT_SUCCESS";
export const CREATE_CLIENT_FAILURE = "CREATE_CLIENT_FAILURE";


//EDIT CLIENT

export const UPDATE_CLIENT_REQUEST = "UPDATE_CLIENT_REQUEST";
export const UPDATE_CLIENT_SUCCESS = "UPDATE_CLIENT_SUCCESS";
export const UPDATE_CLIENT_FAILURE = "UPDATE_CLIENT_FAILURE";

//DELETE CLIENT

export const DELETE_CLIENT_REQUEST = "DELETE_CLIENT_REQUEST";
export const DELETE_CLIENT_SUCCESS = "DELETE_CLIENT_SUCCESS";
export const DELETE_CLIENT_FAILURE = "DELETE_CLIENT_FAILURE";

export const fetchingClientsRequest = () => ({
  type : FETCHING_CLIENTS_REQUEST
});

export const fetchingClientsSuccess = (json) => ({
  type : FETCHING_CLIENTS_SUCCESS,
  payload : json
});

export const fetchingClientsFailure = (error) => ({
  type : FETCHING_CLIENTS_FAILURE,
  payload : error
});

export const fetchClients = () => {
  return(dispatch) => {
    axios.get(`${apiURL}/clients`).then(res => {
      dispatch(fetchingClientsSuccess(res.data))
    },err => {
      dispatch(fetchingClientsFailure(err));
    });
  }
}

//API CREATE CLIENT

export const createClientRequest = () => ({
  type : CREATE_CLIENT_REQUEST
});

export const createClientSuccess = (client) => ({
  type : CREATE_CLIENT_SUCCESS,
  payload : client
});

export const createClientFailure = (error) => ({
  type : CREATE_CLIENT_FAILURE,
  payload : error
});

export const createClient = (client) => {
  return(dispatch) => {
    axios.post(`${apiURL}/clients`, client).then(res => {
      dispatch(createClientSuccess(res.data))
    },err => {
      dispatch(createClientFailure(err));
    });
  }
}

//API UPDATE CLIENT


export const updateClientRequest = () => ({
  type : UPDATE_CLIENT_REQUEST
});

export const updateClientSuccess = (id, client) => ({
  type : UPDATE_CLIENT_SUCCESS,
  id,
  client 
});

export const updateClientFailure = (error) => ({
  type : UPDATE_CLIENT_FAILURE,
  payload : error
});

export const updateClient = (id, client) => {
  return(dispatch) => {
    axios.patch(`${apiURL}/clients/${id}`, client).then(res => {
      dispatch(updateClientSuccess(id, res.data));
    },err => {
      dispatch(updateClientFailure(err));
    });
  }
}

//API DELETE CLIENT

export const deleteClientRequest = () => ({
  type : DELETE_CLIENT_REQUEST
});

export const deleteClientSuccess = ({ id }) => ({
  type: DELETE_CLIENT_SUCCESS,
  id
});

export const deleteClientFailure = (error) => ({
  type : DELETE_CLIENT_FAILURE,
  payload : error
});

export const deleteClient = ({id}) => {
  return(dispatch) => {
    axios.delete(`${apiURL}/clients/${id}`).then(() => {
      dispatch(deleteClientSuccess({id: id}))
    },err => {
      dispatch(deleteClientFailure(err));
    });
  }
}