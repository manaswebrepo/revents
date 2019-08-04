import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventLIst extends Component {
  render() {
    const { events, deleteEvent } = this.props;

    return (
      <Fragment>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))}
      </Fragment>
    );
  }
}

export default EventLIst;
