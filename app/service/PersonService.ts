import {Person} from "../domain/Person";
import {Model} from "../repo/Model";
import {ENDPOINT} from "../util/Constants";
import {METHOD_HTTP} from "../util/Constants";
import {Success} from "../domain/rest/Success";
import {Task} from "../domain/Task";

export class PersonService {
    persons: Person[] = null;

    getAll(keyword: string = '', status?: string, page: number = 1, limit: number = 10): Person[] {
        let url: string = ENDPOINT.person.list + `?page=${page}&limit=${limit}&keyword=${keyword}${status == null ? '' : `&status=${status}`}`;

        Model.callServer(url, METHOD_HTTP.get, false)
            .done((res: Success) => {
                this.setPersons(res.data as Person[]);
            });
        return this.persons;
    }

    setPersons(persons: Person[]) {
        this.persons = persons;
    }

    getTasksByPersonId(id: number): Task[] {
        if (null != this.persons) {
            this.persons.forEach((p) => {
                if (p.id === id) return p.tasks;
            })
        }
        return null;
    }
}
