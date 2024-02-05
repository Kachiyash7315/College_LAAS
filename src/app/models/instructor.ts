export interface Instructor {
    _id: string;
    name: string;
    email: string;
    password: string;
    college: string[];
    isEmailVerified: boolean;
    requestStatus: boolean;
    role: string;
    __v: number;
}