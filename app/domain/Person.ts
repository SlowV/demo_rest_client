export class Person {
    id: number;
    name: string;
    age: number;
    salary: number;
    status: Status
    statusStr: string;
    dob: string;
    salaryFormat: string;
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}