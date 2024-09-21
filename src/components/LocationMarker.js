import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" lat={lat} lng={lng} onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
};

export default LocationMarker;