import React, { Fragment } from 'react'
import { Segment, Item, Label } from 'semantic-ui-react';

const EventDetailedSidebar = ({attendees}) => {
    return (
        <Fragment>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
            >
                2 People Going
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
              </Segment>
            <Segment attached>
            <Item.Group divided>
                {attendees && attendees.map( attendee => (

                    <Item style={{ position: 'relative' }} key={attendee.id}>
                      
                        <Label
                            style={{ position: 'absolute' }}
                            color='orange'
                            ribbon='right'
                        >
                           Host
                    </Label>
                        <Item.Image size='tiny' src={attendee.photoURL} />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>{attendee.name}</Item.Header>
                        </Item.Content>
                    </Item>
             
                ))}
                  </Item.Group>
            </Segment>
        </Fragment>
    )
}

export default EventDetailedSidebar
