// MeetingPage.tsx

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, Button, List, ListItem, ListItemText, Backdrop, Box } from '@mui/material';
import Cookies from 'js-cookie';
import LocationComponent from "../../components/LocationComponent";

interface Participant {
    id: string;
    name: string;
}

const MeetingPage: React.FC = () => {
    const location = useLocation();
    const history = useNavigate();
    const [joined, setJoined] = useState<boolean>(false);
    const [participants, setParticipants] = useState<Participant[]>([]);

    useEffect(() => {
        const hasJoined = Cookies.get('hasJoinedMeeting');
        if (hasJoined) {
            setJoined(true);
            loadParticipants(); // Загружаем список участников при загрузке
        }
    }, []);

    const loadParticipants = () => {
        // Эмуляция загрузки списка участников с сервера
        const savedParticipants = JSON.parse(localStorage.getItem('meetingParticipants') || '[]');
        setParticipants(savedParticipants);
    };

    const handleJoinMeeting = () => {
        // Добавляем текущего пользователя в список присоединившихся
        const newParticipant: Participant = {
            id: `User_${participants.length + 1}`,
            name: `User_${participants.length + 1}`, // Генерируем имя на основе ID
        };

        const updatedParticipants = [...participants, newParticipant];
        setParticipants(updatedParticipants);

        // Сохраняем список участников в localStorage
        localStorage.setItem('meetingParticipants', JSON.stringify(updatedParticipants));

        // Устанавливаем флаг о присоединении в куки
        Cookies.set('hasJoinedMeeting', 'true');
        setJoined(true);
    };

    const handleLeaveMeeting = () => {
        // Удаляем флаг о присоединении из куков
        Cookies.remove('hasJoinedMeeting');

        // Очищаем список участников и localStorage
        setParticipants([]);
        localStorage.removeItem('meetingParticipants');

        // Перенаправляем пользователя на главную страницу
        history(`/`);
    };

    return (
        <div>
            {/* Модальное окно для присоединения к встрече */}
            <Modal open={!joined} closeAfterTransition BackdropComponent={Backdrop}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        width: '100vw',
                        height: '100vh',
                    }}
                >
                    <div className="modal-content">
                        <h2 style={{ color: 'white'}}> {`Вы хотите присоединиться к встрече "${location.pathname.split('/').pop()}"?`}</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <Button onClick={handleJoinMeeting} variant="contained" color="primary">
                            Присоединиться
                        </Button>
                        <Button onClick={() => history(`/`)} variant="contained" color="secondary">
                            Перейти на главную
                        </Button>
                        </div>
                    </div>
                </Box>
            </Modal>

            {/* Список участников встречи */}
            <h1>Список участников:</h1>
            <List>
                {participants.map((participant) => (
                    <ListItem key={participant.id}>
                        <ListItemText primary={participant.name} secondary={`ID: ${participant.id}`} />
                        <LocationComponent />
                    </ListItem>
                ))}
            </List>

            {/* Кнопка "Уйти со страницы" */}
            <Button onClick={handleLeaveMeeting} variant="contained" color="secondary" sx={{ marginTop: 2 }}>
                Покинуть встречу
            </Button>
        </div>
    );
};

export default MeetingPage;
