import {Task} from "./Task";

export class Person {
    id: number;
    name: string;
    age: number;
    salary: number;
    status: Status;
    statusStr: string;
    dob: any;
    salaryFormat: string;
    dobFormat: string;
    isHasTask: boolean;
    tasks: Task[];

    newPerson(person :Person): Person {
        this.id = person.id;
        this.name = person.name;
        this.age = person.age;
        this.salary = person.salary;
        this.status = person.status;
        this.statusStr = person.statusStr;
        this.dob = person.dob;
        this.salaryFormat = person.salaryFormat;
        this.dobFormat = person.dobFormat;
        this.isHasTask = person.isHasTask;
        this.tasks = person.tasks;
        return this;
    }
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
