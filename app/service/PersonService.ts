import {Person} from "../domain/Person";
import {PersonRepository} from "../repo/PersonRepository";

export class PersonService {

    private pr = new PersonRepository();

    getAll(keyword?: string,status?: string, page?: number, limit?: number): Person[] {
        return this.pr.findAll(keyword, status, page, limit);
    }

    getOne(id: number): Person {
        return this.pr.findOne(id);
    }

}