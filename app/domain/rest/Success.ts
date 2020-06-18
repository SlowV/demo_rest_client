import {RESTPagination} from "./RESTPagination";

export class Success {
    status : number;
    message: string;
    data: Object;
    pagination: RESTPagination;
}