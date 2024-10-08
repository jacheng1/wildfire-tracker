import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map((event, index) => {
        if (event.categories[0].id === "wildfires") {
            return <LocationMarker key={index} onClick={() => setLocationInfo({ id: event.id, title: event.title })} lat={event.geometry[0].coordinates[1]} lng={event.geometry[0].coordinates[0]} />
        }

        return null;
    });

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
                yesIWantToUseGoogleMapApiInternals
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
};

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
};

export default Map;