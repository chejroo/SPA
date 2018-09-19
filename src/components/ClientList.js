import React, { Component } from "react";
import { connect } from "react-redux";
import ClientListItem from "./ClientListItem";
import selectClients from "../selectors/clients";
import { setTextFilter } from "../actions/filters";
import {PageHeader, Table, Grid} from 'react-bootstrap';
import ClientLiestFilters from './ClientListFilters';
import DeleteClientModal from './modals/DeleteClientModal';
import { deleteClient } from "../actions/clients";

class ClientList extends Component {

  constructor(props){
    super(props);

    this.state = {
      showModal : false,
      modalClient : '',
      clientID : ''
    }

  }

  searchText = e => {
    const text = e.target.value;
    this.props.dispatch(setTextFilter(text));
  };

  handleDelete = ({id,clientName}) => {
    this.setState({
      clientID : id,
      showModal : true,
      modalClient : clientName
    });
  }

  handleDeleteClient = () => {
    const clientID = this.state.clientID;
    this.props.dispatch(deleteClient({id : clientID}));
    this.setState({
      clientID : '',
      showModal : false,
      modalClient : ''
    });
  }

  onCancel = () => {
    this.setState({
      clientID : '',
      showModal : false,
      modalClient : ''
    });
  }  

  render() {
    return (
      <Grid fluid>
        <DeleteClientModal 
        show = {this.state.showModal}
        body = {`Czy chcesz usunąć "${this.state.modalClient}"`} 
        onSubmitDelete = {this.handleDeleteClient}
        onCancel = {this.onCancel}
        />
        <PageHeader>
          Lista Klientów
          <ClientLiestFilters />
        </PageHeader>
        <Table hover>
          <thead>
            <tr>
              <th>Imię i nazwisko</th>
              <th>Usługa</th>
              <th>Telefon</th>
              <th>Cena</th>
              <th>Lekarz</th>
              <th>Wizyta</th>
              <th>Edycja</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tbody>
            {this.props.clients.map(client => {
              return <ClientListItem key={client.id} {...client} onDelete = {this.handleDelete} />;
            })}
          </tbody>
        </Table>
        {this.props.clients.length === 0 && <p className="text-center lead" style={{color : "#ccc"}}>Brak klientów</p>}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clients: selectClients(state.clients.clients, state.filters)
  };
};

export default connect(mapStateToProps)(ClientList);
