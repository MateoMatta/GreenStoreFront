import React, { Component, Fragment } from 'react';
import axios from "axios";
const config = require('../config.json');

export default class clients extends Component {

  state = {
    newclient: null,
    clients: []
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

  componentDidMount = () => {
    this.fetchclients();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Clients</h1>
            <p className="subtitle is-5">Information about registered clients:</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.clients && this.state.clients.length > 0
                      ? this.state.clients.map(client => <client name={client.clientname} id={client.id} key={client.id} />)
                      : <div className="tile notification is-warning">No clients available</div>
                    }
                  </div>
                </div>
              </div>
            </div>
            <a href="/admin" className="button is-primary">
                  <strong>Add client</strong>
                </a>
          </div>
        </section>
      </Fragment>
    )
  }
}
