import { HashMap } from '@typed/hashmap';

export class Error {
    errors: HashMap<string, string> ;
    status: number;
    message: string;
}