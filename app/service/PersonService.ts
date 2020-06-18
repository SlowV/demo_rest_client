import {Person} from "../domain/Person";
import {PersonRepository} from "../repo/PersonRepository";

export class PersonService {

    private pr = new PersonRepository();

    getAll(keyword?: string, page?: number, limit?: number): Person[] {
        return this.pr.findAll(keyword, page, limit);
    }

    getOne(id: number): Person {
        return this.pr.findOne(id);
    }

}