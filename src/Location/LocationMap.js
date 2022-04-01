import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const locationCordinates = {
    center: {
        lat: -34.397,
        lng: 150.644
    },
    zoom: 11
};

const LocationMap = () => {
    return (
        <div style={{ height: '100%', width: '50%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDq3eMAZPgXcAc5fn6au5bTtZvHf6Et9lA' }}
                defaultCenter={locationCordinates.center}
                defaultZoom={locationCordinates.zoom}
            >
                <AnyReactComponent
                    lat={-34.397}
                    lng={150.644}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default LocationMap