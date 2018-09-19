import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByPrice} from '../actions/filters';

import {FormControl, Form} from 'react-bootstrap';


const ClientListFilters = (props) => (
    <div style={{float : 'right'}} >
        <Form inline>
            <FormControl type = "text" 
            style={{float : 'left',marginRight : '15px', fontSize : '25px', padding : '5px', minHeight : '44px'}} 
            placeholder="Szukaj..."
            value={props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }} />
            <FormControl componentClass="select"
            style={{width : 'auto', minHeight : '44px'}} 
            value = {props.filters.sortBy}
            onChange={(e) => {
                const filterType = e.target.value;
                if (filterType.includes('date')) {
                    props.dispatch(sortByDate(e.target.value));
                }else if (filterType.includes('price')){
                    props.dispatch(sortByPrice(e.target.value));
                }
            }}>
                <option value="dateAscending">Data (rosnąco)</option>
                <option value="dateDescending">Data (malejąco)</option>
                <option value="priceAscending">Cena (rosnąco)</option>
                <option value="priceDescending">Cena (malejąco)</option>
            </FormControl >
        </Form>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
};

export default connect(mapStateToProps)(ClientListFilters);