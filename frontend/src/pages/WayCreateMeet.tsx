import React, { useState } from 'react';
import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    Input,
    InputLabel,
    Typography,
    TextField,
} from '@mui/material';
import BackendMockService from "../services/BackendMockService";
import backendMockService from "../services/BackendMockService";
import { useNavigate } from 'react-router-dom';
import {CreateMeetModel} from "../types/CreateMeetModel";



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
            newErrors.agreement = false;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validateForm()) {
            let service = backendMockService.createMeet(formData);

            history(`/meet/${service.MeetId}`);
            // Отправка данных на бэкенд
            console.log('Данные отправлены:', formData);
            // Мокирование отправки данных на бэкенд
            console.log('Mock отправленных данных:', JSON.stringify(formData));
            // Очистка формы после успешной отправки
            setFormData(initialFormData);
        }
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
