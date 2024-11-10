// MeetingPage.tsx

import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import { Modal, Button, List, ListItem, ListItemText, Backdrop, Box } from '@mui/material';
import Cookies from 'js-cookie';
import LocationComponent from "../../../components/LocationComponent";
import {IMeet, meetService} from "../../../services/MeetSevice";
import {MeetModel} from "../../../types/CreateMeetModel";

interface Participant {
    id: string;
    name: string;
    isActive: boolean;
}

interface MeetingPageProps {
    meetId?: string;
}

const MeetingPage: React.FC<MeetingPageProps> = ({ meetId: propMeetId }) => {
    const { meetId } = useParams<{ meetId: string }>();
    const location = useLocation();
    const history = useNavigate();
    const [joined, setJoined] = useState<boolean>(false);
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [meetLatitude, setLatitude] = useState<string | undefined>(undefined); 
    const [meetLongitude, setLongitude] = useState<string | undefined>(undefined);

    useEffect(() => {
        const hasJoined = Cookies.get('hasJoinedMeeting');
        if (hasJoined) {
            setJoined(true);
            loadParticipants();
            loadMeet(meetId!);
        }
    }, []);
    
    const loadMeet = async (meetId: string) => {
        const meet = await meetService.getMeetById(meetId!);
        const coords = meet.mapLink.split(", ");
        setLatitude(coords[0]);  // Обновляем состояние
        setLongitude(coords[1]); // Обновляем состояние
        console.log("Latitude:", coords[0]);
        console.log("Longitude:", coords[1]);
    }

    const loadParticipants = async () => {
        const members = await meetService.getMembers(meetId!)
        const mappedMembers = members.map(member => ({
            id: member.memberId,
            name: member.memberName,
            isActive: member.isActive
        }));
        setParticipants(mappedMembers);
    };

    const handleJoinMeeting = async () => {
        // Добавляем текущего пользователя в список присоединившихся
        
        const time = new Date();
        let latitude = 0;
        let longitude = 0;
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
            });
        }
        
        var memberId = crypto.randomUUID();
        
        await meetService.addMemberToMeet(meetId!.toUpperCase(), {
            memberId: memberId, 
            memberName: `Участник ${time}`, 
            coordinateLat: latitude, 
            coordinateLon: longitude,
            isActive: true
        });
        
        // Устанавливаем флаг о присоединении в куки
        loadParticipants()
        Cookies.set('hasJoinedMeeting', 'true');
        Cookies.set('memberId', memberId);
        setJoined(true);
    };

    const handleLeaveMeeting = async () => {
        // Удаляем флаг о присоединении из куков
        Cookies.remove('hasJoinedMeeting');

        // Очищаем список участников и localStorage
        setParticipants([]);
        localStorage.removeItem('meetingParticipants');
        
        console.log(meetId!.toUpperCase())
        console.log(Cookies.get('memberId'))

        await meetService.updateMember(meetId!.toUpperCase(), Cookies.get('memberId')!, {isActive: false});

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
                        <ListItemText primary={participant.name} secondary={`ID: ${participant.id} IsActive: ${participant.isActive}`} /> 
                        <LocationComponent latitude={meetLatitude!} longitude={meetLongitude!} />
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
