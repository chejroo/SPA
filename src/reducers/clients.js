// Clients Reducer
import {
    FETCHING_CLIENTS_FAILURE,
    FETCHING_CLIENTS_SUCCESS,
    FETCHING_CLIENTS_REQUEST,
    CREATE_CLIENT_FAILURE,
    CREATE_CLIENT_SUCCESS,
    CREATE_CLIENT_REQUEST,
    UPDATE_CLIENT_FAILURE,
    UPDATE_CLIENT_SUCCESS,
    UPDATE_CLIENT_REQUEST,
    DELETE_CLIENT_FAILURE,
    DELETE_CLIENT_SUCCESS,
    DELETE_CLIENT_REQUEST
} from '../actions/clients';

//API

const apiClientsReducerDefaultState = {
    isFetching: false,
    errorMessage: '',
    clients : []
}

const apiClientsReducer = (state = apiClientsReducerDefaultState, action) => {
    switch (action.type) {
        case FETCHING_CLIENTS_REQUEST:
            return {
                ...state,
                isFetching : true
            }
        case FETCHING_CLIENTS_FAILURE:
            return {
                ...state,
                isFetching : false,
                errorMessage : action.payload
            }
        case FETCHING_CLIENTS_SUCCESS:
            return {
                ...state,
                isFetching : false,
                clients : action.payload
            } 
        //CREATE CLIENT
        case CREATE_CLIENT_REQUEST:
            return {
                ...state,
                isFetching : true
            }
        case CREATE_CLIENT_FAILURE:
            return {
                ...state,
                isFetching : false,
                errorMessage : action.payload
            }
        case CREATE_CLIENT_SUCCESS:
            return {
                ...state,
                clients : [...state.clients, action.payload],
                isFetching : false
            }     

        //UPDATE CLIENT
        case UPDATE_CLIENT_REQUEST:
            return {
                ...state,
                isFetching : true
            }
        case UPDATE_CLIENT_FAILURE:
            return {
                ...state,
                isFetching : false,
                errorMessage : action.payload
            }
        case UPDATE_CLIENT_SUCCESS:
        return {
            ...state,
            clients : state.clients.map((client) => {
                if (client.id === action.id) {
                    return {
                        ...client,
                        ...action.client
                    }
                }
                return client;
            })
        }
        //DELETE CLIENT
        case DELETE_CLIENT_REQUEST:
            return {
                ...state,
                isFetching : true
            }
        case DELETE_CLIENT_FAILURE:
            return {
                ...state,
                isFetching : false,
                errorMessage : action.payload
            }
        case DELETE_CLIENT_SUCCESS:   
            return {
                ...state,
                clients : state.clients.filter((client) => client.id !== action.id)
            }                                                                  
        default:
            return state;
    }
}

export default apiClientsReducer;