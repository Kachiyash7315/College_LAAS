// export interface ClassroomsJoined {
//     classroomId: string;
//     name: string;
// }

// export interface StudentData {
//     _id: string;
//     name: string;
//     email: string;
//     password: string;
//     college: string;
//     isEmailVerified: boolean;
//     role: string;
//     classroomsJoined: ClassroomsJoined[];
//     __v: number;
// }

// export interface Submission {
//     studentData: StudentData;
//     code: string;
// }

export interface AssignmentData {
    _id: string;
    name: string;
    problemStatement: string;
    description: string;
    labEnvironment: string;
    lab: string;
    ram: number;
    dueDate: Date;
    programmingLanguage: string;
    dependencies: string[];
    dataset?: any;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface MySubmission {
    _id: string;
    assignmentId: string;
    studentId: string;
    assignmentData: string;
    language: string;
    attempts: number;
    remarks: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface StudentData {
    _id: string;
    name: string;
    email: string;
    password: string;
    college: string;
    isEmailVerified: boolean;
    role: string;
    __v: number;
}

export interface Submission {
    submission: MySubmission;
    studentData: StudentData;
    code: string;
}

export interface RootObjectSubmission {
    assignmentData: AssignmentData;
    submissions: Submission[];
}



