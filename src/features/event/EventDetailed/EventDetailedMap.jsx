import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

const Marker = () => <Icon name='marker' size='big' color='red' />;

const EventDetailedMap = ({ lat, lng }) => {
  const zoom = 14;
  return (
    <Segment attached='bottom'>
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          style={{ padding: 0 }}
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{ lat, lng }}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
        <h1>Hi this is map here</h1>
      </div>
    </Segment>
  );
};

export default EventDetailedMap;
