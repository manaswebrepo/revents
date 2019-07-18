import React, { Component, Fragment } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar></NavBar>
        <Container className="main">
          <EventDashboard></EventDashboard>
        </Container>
      </Fragment>
    );
  }
}

export default App;