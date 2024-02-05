export interface Institute {
    _id: string;
    instituteName: string;
    email: string;
    phoneNo: string;
    location: string;
    password: string;
    websiteUrl: string;
    isEmailVerified: boolean;
    instructorRequest: any[];
    authorizedInstructors: any[];
    role: string;
    code: string;
    ownerUserId: string;
    __v: number;
}
