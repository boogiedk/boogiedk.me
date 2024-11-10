import axios, { AxiosResponse } from 'axios';

export interface IMeet {
    meetId: string;
    title: string;
    description: string;
    mapLink: string;
    createdDate: string;
    members: IMeetMember[];
    isActive: boolean;
}

export interface ICreateMeet {
    title: string;
    description: string;
    mapLink: string;
    members: ICreateMeetMember[];
}


export interface IMeetMember {
    memberId: string;
    memberName: string;
    coordinateLat: number;
    coordinateLon: number;
    isActive: boolean;
}

export interface ICreateMeetMember {
    memberName: string;
    coordinateLat: number;
    coordinateLon: number;
}

export interface ICreateMeetResponse {
    meetId: string;
}

export interface IUpdateMemberResponse {
    isActive: boolean;
}

class MeetService {

    private API_PATH = 'http://localhost:5219/api/v1/meets/';

    public getMeetById = async (meetId: string): Promise<IMeet> => {
        const response: AxiosResponse<IMeet> = await axios.get(`${this.API_PATH}${meetId}`);
        return response.data;
    };

    public createMeet = async (meet: ICreateMeet): Promise<ICreateMeetResponse> => {
        let response = await axios.post(this.API_PATH, meet);
        return response.data;
    };

    public addMemberToMeet = async (meetId: string, meetMember: IMeetMember): Promise<void> => {
        console.log(meetId!)
        await axios.put(`${this.API_PATH}${meetId}/members`, meetMember);
    };

    public getMembers = async (meetId: string): Promise<IMeetMember[]> => {
        let response: AxiosResponse<IMeetMember[]> = await axios.get(`${this.API_PATH}${meetId}/members`);
        return response.data;
    };

    public updateMember = async (meetId: string, memberId: string, member: IUpdateMemberResponse): Promise<void> => {
        await axios.put(`${this.API_PATH}${meetId}/members/${memberId}`, member);
    };
}

export const meetService = new MeetService();