import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClientDashboardPage from '../components/ClientDashboard';
import AddClientPage from '../components/AddClientPage';
import EditClientPage from '../components/EditClientPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component = { ClientDashboardPage } exact = {true} />
                <Route path="/create" component = { AddClientPage } />
                <Route path="/edit/:id" component = { EditClientPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;