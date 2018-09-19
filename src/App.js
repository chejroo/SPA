import React, { Component } from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { fetchClients } from "./actions/clients";
const store = configureStore();

store.dispatch(fetchClients(fetchClients()));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
