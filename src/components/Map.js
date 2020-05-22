import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import { compose, withProps } from "recompose";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBoOXBhVo6zXxN95rQo3K9MZqYuYDMa2Pc",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 51.485815, lng: -2.602569 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 51.485428, lng: -2.602569 }} />
    )}
  </GoogleMap>
));

export default Map;
