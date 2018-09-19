import React, {Component} from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import { Button } from 'react-bootstrap';


class ClientListItem extends Component {

  onDeleteItem = () => {
    this.props.onDelete({
      id : this.props.id,
      clientName : this.props.fullname
    })
  }

  render(){
    return (
    <tr>
      <td>{this.props.fullname}</td>
      <td>{this.props.service}</td>
      <td>{this.props.phone}</td>
      <td>{this.props.price} zł</td>
      <td>{this.props.doctorName}</td>
      <td>{moment(this.props.visitDate).format('MM-DD-YYYY H:m')}</td>
      <td>
        <Link to={`/edit/${this.props.id}`}>
          Edytuj
        </Link>
      </td>
      <td>
        <Button type="button" bsStyle="link" onClick={this.onDeleteItem}>
          Usuń
        </Button>
      </td>
    </tr>
    );
  }
}

export default ClientListItem;
