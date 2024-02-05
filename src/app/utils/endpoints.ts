import { environment } from "src/environments/environment";

export class Endpoints {
    static backendIp: string = "https://laas-prod.onrender.com";
    static login: string = `${this.backendIp}/api/auth/loginuser`;
    static institutionLogin: string = `${this.backendIp}/api/auth/login`;
    static signup: string = `${this.backendIp}/api/auth/signup`;
    static verifyEmail: string = `${this.backendIp}/api/auth/verifymail/`;
    static verifyInstitutionEmail: string = `${this.backendIp}/api/auth/verifyinstituteemail/`;
    static createInstitution: string = `${this.backendIp}/api/auth/signupinstitute`;
    static getAllInstitution: string = `${this.backendIp}/api/institution/getallinstitutions`;
    static joinInstitutionAsStudent: string = `${this.backendIp}/api/auth/signupstudent`;
    static classrooms: string = `${this.backendIp}/api/create/classroom/`;
    static joinClassrooms: string = `${this.backendIp}/api/create/joinclassroom/`;
    static getAllclassroomsEnrolled: string = `${this.backendIp}/api/student/getallclassrooms`;
    static getAllStudents: string = `${this.backendIp}/api/institution/getallstudents`;
    static joinInstitutionAsInstructor: string = `${this.backendIp}/api/auth/signupinstructor`
    static getAllInstructors: string = `${this.backendIp}/api/institution/getallinstructors`
    static getAllInstructorsRequest: string = `${this.backendIp}/api/institution/getRequestedInstructors`
    static instructorRequest: string = `${this.backendIp}/api/auth/request/`;
    static lab: string = `${this.backendIp}/api/labprocess/lab`;
    static getinstructorlabs: string = `${this.backendIp}/api/instructor/labs`;
    static assignments: string = `${this.backendIp}/api/instructor/assignment`;
    static getassignmentStudent: string = `${this.backendIp}/api/student/getassignment`;
    static getAssignmentDetails: string = `${this.backendIp}/api/student/solveassignment`;
    static getSubmissionDetails: string = `${this.backendIp}/api/student/submission`;
    static getAllStudentLabs: string = `${this.backendIp}/api/student/getalllabs`;
    static submitAssignment: string = `${this.backendIp}/api/student/submit`;
    static submissions: string = `${this.backendIp}/api/instructor/submit`;
    static remark: string = `${this.backendIp}/api/instructor/remark`;





    static wayToCompiler: string = `http://161.97.136.61:7777`




    //CMS ENDPOINTS
    static content_creator: string = `${this.backendIp}/api/cms/request/becomeContentCreator`;
}

// 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
