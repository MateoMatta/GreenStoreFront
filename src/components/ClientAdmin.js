import React, { Component, Fragment } from 'react';
import axios from "axios";
const config = require('../config.json');

export default class ClientAdmin extends Component {

  state = {
    newclient: { 
      "clientname": "", 
      "id": ""
    },
    clients: []
  }

  handleAddclient = async (id, event) => {
    event.preventDefault();
    // add call to AWS API Gateway add client endpoint here
    try {
      const params = {
        "id": id,
        "clientname": this.state.newclient.clientname
      };
      await axios.post(`${config.api.invokeUrl}/clients/${id}`, params);
      this.setState({ clients: [...this.state.clients, this.state.newclient] });
      this.setState({ newclient: { "clientname": "", "id": "" }});
    }catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }

  handleUpdateclient = async (id, name) => {
    // add call to AWS API Gateway update client endpoint here
    try {
      const params = {
        "id": id,
        "clientname": name
      };
      await axios.patch(`${config.api.invokeUrl}/clients/${id}`, params);
      const clientToUpdate = [...this.state.clients].find(client => client.id === id);
      const updatedclients = [...this.state.clients].filter(client => client.id !== id);
      clientToUpdate.clientname = name;
      updatedclients.push(clientToUpdate);
      this.setState({clients: updatedclients});
    }catch (err) {
      console.log(`Error updating client: ${err}`);
    }
  }

  handleDeleteclient = async (id, event) => {
    event.preventDefault();
    // add call to AWS API Gateway delete client endpoint here
    try {
      await axios.delete(`${config.api.invokeUrl}/clients/${id}`);
      const updatedclients = [...this.state.clients].filter(client => client.id !== id);
      this.setState({clients: updatedclients});
    }catch (err) {
      console.log(`Unable to delete client: ${err}`);
    }
  }

  fetchclients = async () => {
    // add call to AWS API Gateway to fetch clients here
    // then set them in state
    try {
      const res = await axios.get(`${config.api.invokeUrl}/clients`);
      const clients = res.data;
      this.setState({ clients: clients });
    } catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }

  onAddclientNameChange = event => this.setState({ newclient: { ...this.state.newclient, "clientname": event.target.value } });
  onAddclientIdChange = event => this.setState({ newclient: { ...this.state.newclient, "id": event.target.value } });

  componentDidMount = () => {
    this.fetchclients();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Clients Admin View</h1>
            <p className="subtitle is-5">Add and remove clients using the form below:</p>
            <br />
            <div className="rows">
              <div className="row is-one-third">
                <form onSubmit={event => this.handleAddclient(this.state.newclient.id, event)}>
                  <div className="field has-addons">
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
                        placeholder="Enter id"
                        value={this.state.newclient.id}
                        onChange={this.onAddclientIdChange}
                      />
                    </div>
                    <div className="control">
                      <button type="submit" className="button is-primary is-medium">
                        Add client
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="column is-two-thirds">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.clients.map((client, index) => 
                        <client 
                          isAdmin={true}
                          handleUpdateclient={this.handleUpdateclient}
                          handleDeleteclient={this.handleDeleteclient} 
                          name={client.clientname} 
                          id={client.id}
                          key={client.id}
                        />)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
