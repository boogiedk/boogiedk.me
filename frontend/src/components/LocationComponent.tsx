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

    const yandexUrl =  `https://yandex.com/maps/?rtext=${coordinates?.latitude}%2C${coordinates?.longitude}~55.586500%2C37.434101&rtt=pd`;

    return (
        <div>
            {
                coordinates ? (
                <p>
                    <a href={yandexUrl}>Где участник?</a>
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default LocationComponent;