export interface Assignment {
    id: string;
    name: string;
    problemStatement: string;
    description: string;
    labEnvironment: string;
    lab: string;
    ram: string;
    dueDate: any;
    programmingLanguage: string;
    dependencies: string[];
    dataset?: any;
    datecreated:any;
}