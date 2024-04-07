import {CreateMeetModel} from "../types/CreateMeetModel";
import {MeetModel} from "../types/CreateMeetModel";

interface CreateMeetResponse {
    MeetId: string
}

const meetModel: MeetModel = {
    meetId:'e3d4cc47-e548-4e4f-b902-750e524fafd3',
    title: 'Гуляем по ТЦ',
    description: 'тц галерея',
    mapsLink: 'https://yandex.ru/maps/org/galleria_minsk/1338341926/?ll=27.548427%2C53.908538&z=14',
    agreement: true,
};

const viewMeetModel: CreateMeetModel = {
    title: '',
    description: '',
    mapsLink: '',
    agreement: false,
};

class BackendMockService
{
    createMeet = (initialFormData: any) => {
        meetModel.title = initialFormData.title;
        meetModel.description = initialFormData.description;
        meetModel.agreement = initialFormData.agreement;
        meetModel.mapsLink = initialFormData.mapsLink;
        meetModel.meetId = 'e3d4cc47-e548-4e4f-b902-750e524fafd3';
        
        return {
            MeetId: meetModel.meetId
        }
    };
    
    getMeet = (meetId: any) => {
        return meetModel
    }


}

const backendMockService = new BackendMockService();
export default backendMockService;

