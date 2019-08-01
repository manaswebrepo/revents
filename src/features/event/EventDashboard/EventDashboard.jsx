import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventLIst from '../EventList/EventLIst';

import { createEvent, updateEvent, deleteEvent } from '../eventActions'

const mapStateToProps = (state) => ({
  events: state.events
})

const actions = {
  createEvent, updateEvent, deleteEvent
}
class EventDashboard extends Component {
  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  }
  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventLIst events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, actions)(EventDashboard);