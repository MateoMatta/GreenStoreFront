import React, { Component, Fragment }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ClientItems extends Component {

  state = {
    isEditMode: false,
    updatedclientname: this.props.name,
    contactInformation: {
      phone: "",
      mail: ""
    },
    id: "",
    firstName: "",
    deliveryAddress: "",
    lastName: "",
    receipts: [
      {
        quantity: 0,
        productName: "",
        date: "",
        total: 0
      }]
  }

  handleClientEdit = event => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    this.props.handleUpdateclient(this.props.id, this.state.updatedclientname);
  }
  onAddProductNameChange = event => this.setState({ "updatedproductname": event.target.value });
  //onAddclientPhoneChange = event => this.setState({ contactInformation, contactInformation.phone: event.target.value } });
  //onAddclientMailChange = event => this.setState({ newclient: { ...this.state.newclient.contactInformation, mail: event.target.value } });
  onAddclientNameChange = event => this.setState({ firstName: event.target.value });
  onAddclientIdChange = event => this.setState({id: event.target.value });
  onAddclientDeliveryAddressChange = event => this.setState({deliveryAddress: event.target.value });
  onAddclientLastNameChange = event => this.setState({ lastName: event.target.value });

  render() {
    return (
      <div className="tile is-child box notification is-success">
        {
          this.props.isAdmin && 
          <Fragment>
            <a href="/" onClick={this.handleclientEdit} className="client-edit-icon">
              <FontAwesomeIcon icon="edit" />
            </a>
            {/* <button onClick={event => this.props.handleDeleteclient(this.props.id, event)} className="delete"></button>*/}
          </Fragment>
        }
        {
          this.state.isEditMode 
          ? <div>
              <p>Edit client name</p>
              <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter name"
                        value={this.state.newclient.clientname}
                        onChange={this.onAddclientNameChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Last Name"
                        value={this.state.newclient.lastName}
                        onChange={this.onAddclientLastNameChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter id"
                        value={this.state.newclient.id}
                        onChange={this.onAddclientIdChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Phone Number"
                        value={this.state.newclient.contactInformation.phone}
                        onChange={this.onAddclientPhoneChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Mail"
                        value={this.state.newclient.contactInformation.mail}
                        onChange={this.onAddclientMailChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Delivery Address"
                        value={this.state.newclient.deliveryAddress}
                        onChange={this.onAddclientDeliveryAddressChange}
                      />
                    </div>
              <p className="client-id">id: { this.props.id }</p>
              <button type="submit" 
                className="button is-info is-small"
                onClick={ this.handleEditSave }
              >save</button>
            </div>
          : <div>
            <div>
              <p className="client-id">id: { this.props.id }</p>
              <p className="client-id">First Name: { this.props.firstName}</p>
              <p className="client-id">Last Name: { this.props.lastName}</p>
              {/*<p className="client-id">Phone: { this.props.contactInformation.phone}</p>
              <p className="client-id">Mail: { this.props.contactInformation.mail}</p>*/}
              <p className="client-id">Delivery Address: { this.props.deliveryAddress}</p>
            </div>
            </div> 
        }
      </div>
    )
  }
}
