import {Person} from "../domain/Person";
import {Model} from "../repo/Model";
import {ENDPOINT, HTTP_STATUS, LOAD_DATA_MODE, METHOD_HTTP} from "../util/Constants";
import {RESTResponse} from "../domain/rest/RESTResponse";
import {Task} from "../domain/Task";

export class PersonService {
    persons: Person[] = null;

    getAll(keyword: string = '', status?: string, page: number = 1, limit: number = 10): Person[] {
        let url: string = ENDPOINT.person.findAll + `?page=${page}&limit=${limit}&keyword=${keyword}${status == null ? '' : `&status=${status}`}`;

        Model.callServer(url, METHOD_HTTP.Get, false)
            .done((res: RESTResponse) => {
                if (res.status === HTTP_STATUS.OK) {
                    this.setPersons(res.data as Person[]);
                }
            });
        return this.persons;
    }

    setPersons(persons: Person[]) {
        this.persons = persons;
    }

    getTasksByPersonId(id: number, mode: LOAD_DATA_MODE = LOAD_DATA_MODE.Cache): Task[] {
        let tasks: Task[] = null;

        if (this.persons == null || mode === LOAD_DATA_MODE.Refresh) {
            let url = ENDPOINT.task.findByPersonId.replace('{**?}', `${id}`);
            Model.callServer(url, METHOD_HTTP.Get, false).done((res: RESTResponse) => {
                tasks = res.data as Task[];
            });
        } else {
            this.persons.forEach((p) => {
                (p.id === id) ? tasks = p.tasks : '';
            });
        }
        return tasks;
    }

    getPerson(id: number, mode: LOAD_DATA_MODE = LOAD_DATA_MODE.Cache): Person {
        let person = null;
        if (mode === LOAD_DATA_MODE.Refresh) {
            let url = ENDPOINT.person.findOne.replace('{**?}', `${id}`);
            Model.callServer(url, METHOD_HTTP.Get, false)
                .done((res: RESTResponse) => {
                    if (res.status == HTTP_STATUS.OK) {
                        person = res.data as Person;
                    }
                });
        } else {
            this.persons.forEach((p) => {
                (p.id === id) ? person = p : '';
            });
        }
        return person;
    }
}
