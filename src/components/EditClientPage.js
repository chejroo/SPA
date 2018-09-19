import React from "react";
import { connect } from "react-redux";
import ClientForm from "./ClientForm";
import { updateClient } from "../actions/clients";

const EditClientPage = props => {
  return (
    <div>
      <ClientForm
        client={props.client}
        onSubmit={client => {
          props.dispatch(updateClient(props.client.id, client));
          props.history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => { 
  console.log(props);
  
  return {
    client: state.clients.clients.find(client => client.id === Number(props.match.params.id))
  };
};

export default connect(mapStateToProps)(EditClientPage);
