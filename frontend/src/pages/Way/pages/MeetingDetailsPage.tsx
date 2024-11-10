import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {IMeet, meetService} from "../../../services/MeetSevice";
import MeetingPage from "./../pages/MeetingPage";
import "./../WayMeet.css"

const MeetingDetailsPage: React.FC = () => {
    const { meetId } = useParams<{ meetId: string }>();
    const [meet, setMeet] = useState<IMeet | null>(null);
    console.log(meetId)

    useEffect(() => {
        const fetchMeet = async () => {
            try {
                if (meetId) {
                    const fetchedMeet = await meetService.getMeetById(meetId);
                    setMeet(fetchedMeet);
                }
            } catch (error) {
                console.error('Error fetching meeting:', error);
                // Обработка ошибки при загрузке данных
            }
        };
        
        fetchMeet();

        return () => {
            // Очищаем состояние при размонтировании компонента (необязательно в вашем случае)
        };
    }, []); // Пустой массив зависимостей означает, что эффект вызывается только при монтировании

    if (!meet) {
        return <div>Loading...</div>; // Отображаем загрузочное состояние, пока данные не загружены
    }

    return (
        <div className="meet-card">
            <p className="meet-p"><strong>Идентификатор встречи:</strong> {meet.meetId}</p>
            <h2 className="meet-h2">{meet.title}</h2>
            <p className="meet-p">{meet.description}</p>
            <a className="meet-a" href={meet.mapLink} target="_blank" rel="noopener noreferrer">
                Координаты встречи
            </a>
            <MeetingPage meetId={meet.meetId} />
        </div>
    );
};

export default MeetingDetailsPage;
