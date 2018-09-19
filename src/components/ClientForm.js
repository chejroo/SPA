import React, {Component} from 'react';

import {Grid, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import ClientFormErrors from '../forms/ClientFormErrors';

import moment from 'moment';

export default class ClientForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullname: props.client ? props.client.fullname : '',
            service: props.client ? props.client.service : '',
            phone: props.client ? props.client.phone : '',
            price: props.client ? (props.client.price ).toString() : '',
            doctorName: props.client ? props.client.doctorName : '',
            visitDate: props.client ? props.client.visitDate : '',           
            formValid : props.client ? true : false,
            formErrors : {
                fullname : '', 
                service : '', 
                phone : '', 
                price : '', 
                doctorName : '', 
                visitDate : ''
            },
            isFullnameValid : props.client ? props.client.isFullnameValid : false,
            isServiceValid : props.client ? props.client.isServiceValid : false,
            isPhoneValid : props.client ? props.client.isPhoneValid : false,
            isPriceValid : props.client ? props.client.isPriceValid : false,
            isDoctorNameValid : props.client ? props.client.isDoctorNameValid : false,
            isVisitDateValid : props.client ? props.client.isVisitDateValid :false
        };

    }   

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            fullname: this.state.fullname,
            service: this.state.service,
            phone: this.state.phone,
            price: this.state.price,
            doctorName: this.state.doctorName,
            visitDate: moment(this.state.visitDate).valueOf()
        });
    };

    handleUserInput = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        this.setState({[inputName]: inputValue}, 
            () => { this.validateField(inputName, inputValue) });
    };

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let fullnameValid = this.state.isFullnameValid;
        let serviceValid = this.state.isServiceValid;
        let phoneValid = this.state.isPhoneValid;
        let priceValid = this.state.isPriceValid;
        let doctorNameValid = this.state.isDoctorNameValid;
        let visitDateValid = this.isVisitDateValid;

        switch (fieldName) {
            case 'fullname':
                fullnameValid = value.length > 0;
                fieldValidationErrors.fullname = fullnameValid ? '' : ' is invalid';
                break;
            case 'service':
                serviceValid = value !== 'default';
                fieldValidationErrors.service = serviceValid ? '' : ' is invalid';
                break; 
            case 'phone':
                phoneValid = value.match(/^([0-9\(\)\/\+ \-]*)$/) && value.replace(/\s/g, '').length <= 11;
                fieldValidationErrors.phone = phoneValid ? '' : ' is invalid';
                break;
            case 'price':
                priceValid = value.match(/^\d{1,}(\.\d{0,2})?$/);
                fieldValidationErrors.price = priceValid ? '' : ' is invalid';
                break;      
            case 'doctorName':
                doctorNameValid = value !== 'default';
                fieldValidationErrors.doctorName = doctorNameValid ? '' : ' is invalid';
                break; 
            case 'visitDate':
                visitDateValid = value !== '';
                fieldValidationErrors.visitDate = visitDateValid ? '' : ' is invalid';
                break;                                          
            default:
                break;
        }

        this.setState({
            formErrors : fieldValidationErrors,
            isFullnameValid : fullnameValid,
            isServiceValid : serviceValid,
            isPhoneValid : phoneValid,
            isPriceValid : priceValid,
            isDoctorNameValid : doctorNameValid,
            isVisitDateValid : visitDateValid,
        }, this.validateForm())
    }

    validateForm = () => {
        this.setState({
            formValid: this.state.isFullnameValid && this.state.isServiceValid && this.state.isPhoneValid && this.state.isPriceValid && this.state.isDoctorNameValid && this.state.isVisitDateValid
        });
    }

    errorClass = (error) => {
        return(error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <Grid>
                <ClientFormErrors formErrors = {this.state.formErrors} />
                <form onSubmit={this.onSubmit}>

                    <FormGroup>

                        <ControlLabel>Imię i nazwisko</ControlLabel>

                        <FormControl
                        type = "text"
                        placeholder = "Imię i nazwisko"
                        autoFocus
                        name = "fullname"
                        value = {this.state.fullname}
                        onChange = {this.handleUserInput}
                        
                        />

                        {this.errorClass(this.state.formErrors.fullname) && <p style={{color: 'red'}}>To pole jest wymagane</p>}

                    </FormGroup>


                    <FormGroup>

                        <ControlLabel>Zabieg</ControlLabel>
                        <FormControl componentClass="select" placeholder="Zabieg" name="service" value={this.state.service || 'default'}  onChange = { this.handleUserInput }>
                            <option defaultValue value = "default" disabled>Rodzaj zabiegu</option>
                            <option value="Usługa1">Usługa 1</option>
                            <option value="Usługa2">Usługa 2</option>
                            <option value="Usługa3">Usługa 3</option>
                        </FormControl>

                    </FormGroup>  

                    <FormGroup>

                        <ControlLabel>Nr. telefonu</ControlLabel>                  
                        <FormControl
                        type = "text"
                        name = "phone"
                        placeholder = "Nr. telefonu"
                        value = {this.state.phone}
                        onChange = { this.handleUserInput }
                        />    

                        {this.errorClass(this.state.formErrors.phone) && <p style={{color: 'red'}}>Niepoprawny format numeru.</p>}  
                    </FormGroup>

                    <FormGroup>

                        <ControlLabel>Cena</ControlLabel>                                  
                        <FormControl
                        type = "text"
                        name = "price"
                        placeholder = "Price"
                        value = {this.state.price}
                        onChange = { this.handleUserInput }
                        />  
                        {this.errorClass(this.state.formErrors.price) && <p style={{color: 'red'}}>Niepoprawny format ceny</p>}
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Specjalista</ControlLabel>
                            <FormControl componentClass="select" name = "doctorName" value={this.state.doctorName || 'default'} onChange = { this.handleUserInput }>
                                <option defaultValue value = "default" disabled>Wybierz specjalistę</option>
                                <option value="Dr. MACIEJ KOWALSKI">Dr. MACIEJ KOWALSKI</option>
                                <option value="Dr. JOANNA KOWALSKA">Dr. JOANNA KOWALSKA</option>
                                <option value="Dr. ADAM KOWALSKI">Dr. ADAM KOWALSKI</option>
                            </FormControl>
                    </FormGroup> 

                    <FormGroup>

                        <ControlLabel>Data wizyty</ControlLabel>        
                                 
                        <FormControl
                        value={moment(this.state.visitDate).format('YYYY-MM-DDTHH:mm')}  
                        name = "visitDate"
                        onChange = { this.handleUserInput }
                        type="datetime-local" 
                        />                                         
                    </FormGroup>


                    <Button type="submit" className="pull-right text-uppercase"  bsStyle="primary" disabled={!this.state.formValid}>
                        {this.props.client && "Zapisz zmiany" || "Dodaj klienta"}
                    </Button>       

                </form>
            </Grid>
        );
    }
}