import React from "react";
import { connect } from "react-redux";
import ClientForm from "./ClientForm";
import { createClient } from "../actions/clients";

const AddClientPage = (props) => (
  <div>
    <ClientForm
      onSubmit={client => {
        props.dispatch(createClient(client));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddClientPage);
