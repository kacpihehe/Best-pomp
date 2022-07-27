import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const defaultProps = {
    center: {
      lat: 51.7437046,
      lng: 19.4907239
    },
    zoom: 14
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: defaultProps.center.lat, lng: defaultProps.center.lng },
      map,
      title: '.'
    });
    return marker;
  };

  return (
    <div className="bestpomp-contact-map-container" style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDxyAl4MsQKUkD8OdyORUurUS5xSRaJsCM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
      </GoogleMapReact>
    </div>
  );
}

export default Map;
