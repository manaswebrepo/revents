import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem';

class EventLIst extends Component {
    render() {
        return (
            <Fragment>
                {this.props.events.map(event => (
                    <EventListItem key={event.id} event={event}></EventListItem>
                ))}


            </Fragment>
        )
    }
}

export default EventLIst;