import React from 'react';
import { useParams } from 'react-router-dom';
import BackendMockService from "../services/BackendMockService";
import backendMockService from "../services/BackendMockService";
import LocationComponent from "../components/LocationComponent";

const MeetingDetailsPage: React.FC = () => {
    const { meetId } = useParams<{ meetId: string }>();
    const meet = backendMockService.getMeet(meetId);

    return (
        <div>
            <h1>Идентификатор встречи {meet.meetId}</h1>
            <h1>Заголовок {meet.title}</h1>
            <h1>Ссылка {meet.mapsLink}</h1>
            <h1>Детали встречи {meet.description}</h1>
            <br/>
            <LocationComponent />
        </div>
    );
};

export default MeetingDetailsPage;