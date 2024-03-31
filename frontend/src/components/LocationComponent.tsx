import React, { useEffect, useState } from 'react';

interface Coordinates {
    latitude: number;
    longitude: number;
}

const LocationComponent: React.FC = () => {
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCoordinates({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <div>
            {coordinates ? (
                <p>
                    Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default LocationComponent;