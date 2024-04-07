import React from 'react';
import { useParams } from 'react-router-dom';
import backendMockService from "../../services/BackendMockService";
import './WayMeet.css';
import MeetingPage from "./MeetingPage";

const MeetingDetailsPage: React.FC = () => {
    const { meetId } = useParams<{ meetId: string }>();
    const meet = backendMockService.getMeet(meetId);

    return (
        <div className="meet-card">
            <p><strong>Идентификатор встречи:</strong> {meet.meetId}</p>
            <h2>{meet.title}</h2>
            <p>{meet.description}</p>
            <a href={meet.mapsLink} target="_blank" rel="noopener noreferrer">
                Место встречи (Яндекс.Карта)
            </a>
            <MeetingPage />
        </div>
    );
};

export default MeetingDetailsPage;