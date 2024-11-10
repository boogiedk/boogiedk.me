import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface DestinationCoordinates {
    latitude: string;
    longitude: string;
}


const LocationComponent: React.FC<DestinationCoordinates> = ({latitude, longitude}) => {
    
    console.log(latitude);
    console.log(longitude);
    
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

    const yandexUrl =  `https://yandex.com/maps/?rtext=${coordinates?.latitude}%2C${coordinates?.longitude}~${latitude}%2C${longitude}&rtt=pd`;
    console.log(yandexUrl)

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