import React, { useState } from 'react';
import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    Typography,
    TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {CreateMeetModel} from "../../types/CreateMeetModel";
import {ICreateMeet, meetService} from "../../services/MeetSevice";

const initialFormData: CreateMeetModel = {
    title: '',
    description: '',
    mapsLink: '',
    agreement: false,
};

const MeetingForm: React.FC = () => {
    const [formData, setFormData] = useState<CreateMeetModel>(initialFormData);
    const [errors, setErrors] = useState<Partial<CreateMeetModel>>({});
    const history = useNavigate();
    
    const validateForm = (): boolean => {
        const newErrors: Partial<CreateMeetModel> = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Пожалуйста, укажите название встречи';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Пожалуйста, укажите описание';
        }

        if (!formData.mapsLink.trim()) {
            newErrors.mapsLink = 'Пожалуйста, укажите ссылку на Яндекс.Карты';
        }

        if (!formData.agreement) {
            newErrors.agreement = true;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validateForm()) {
            let latitude = 0;
            let longitude = 0;
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                        latitude = position.coords.latitude;
                        longitude = position.coords.longitude;
                });
            }
            
            const createMeetModel : ICreateMeet = {
                title: formData.title,
                description: formData.description,
                mapLink: formData.mapsLink,
                members: [
                    {
                        memberName: "Создатель встречи",
                        coordinateLat: latitude,
                        coordinateLon: longitude
                    }
                ]
                
            }
            let createdMeet = await meetService.createMeet(createMeetModel);
            history(`/services/where-are-you/meet/${createdMeet.meetId}`);
            setFormData(initialFormData);
        }
    };

    const getLocation = () => {
        
    };

    const handleChange = (key: keyof CreateMeetModel, value: string | boolean) => {
        setFormData(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleCancel = () => {
        setFormData(initialFormData);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Создание встречи
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Название встречи"
                    value={formData.title}
                    onChange={e => handleChange('title', e.target.value)}
                    error={!!errors.title}
                    helperText={errors.title}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Описание"
                    value={formData.description}
                    onChange={e => handleChange('description', e.target.value)}
                    error={!!errors.description}
                    helperText={errors.description}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                />
                <TextField
                    fullWidth
                    label="Ссылка на Яндекс.Карты"
                    value={formData.mapsLink}
                    onChange={e => handleChange('mapsLink', e.target.value)}
                    error={!!errors.mapsLink}
                    helperText={errors.mapsLink}
                    margin="normal"
                    required
                />
                <FormControl required error={!!errors.agreement} component="fieldset" margin="normal">
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.agreement}
                                    onChange={e => handleChange('agreement', e.target.checked)}
                                />
                            }
                            label="Согласен с пользовательским соглашением"
                        />
                    </FormGroup>
                    {errors.agreement && <FormHelperText>Пожалуйста, согласитесь с пользовательским соглашением</FormHelperText>}
                </FormControl>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button variant="contained" color="primary" type="submit">
                        Создать
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleCancel}>
                        Отменить
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default MeetingForm;
