

export class User {
    Id: number;
    Name: string;
    Login: string;
    Password: string;
    Role: number;
    Department: string;
    Post: string;
    UserRole: UserRole;

    constructor() {
        this.Id = 0;
        this.Name = "Новый";
        this.Login = "";
        this.Password = "";
        this.Role = 0;
        this.Department = "";
        this.Post = "";
    }
}

export enum UserRole {
    None = 0x0,
    View = 0x1,
    Admin = 0x2,
    ReportEditor = 0x4,
    TrainingStudent = 0x8,
    TrainingModerator = 0x10,
    TrainingEditor = 0x20,
    TMManager = 0x40,
    TMDispatcher = 0x80,
    TMTechnologist = 0x100,
    TMGeologist = 0x200,
    TMEngineer = 0x400
}

export interface IUserRole {
    value: string;
    viewValue: string;
    enumValue: number;
}