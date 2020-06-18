import {ICrudRepository} from "./ICrudRepository";
import {Person} from "../domain/Person";
import $ = require("jquery");
import {ENDPOINT} from "../util/Constants";
import {Success} from "../domain/rest/Success";

export class PersonRepository implements ICrudRepository<Person, number> {

    findAll(keyword?: string, page?: number, limit?: number): Person[] {
        let res: Success = null;
        let persons: Person[] = null;

        if (page == null) page = 1;
        if (limit == null) limit = 10;
        let url = ENDPOINT.person.list + `?page=${page}&limit=${limit}${keyword == null ? '' : `&keyword=${keyword}`}`;

        $.ajax({
            url: url,
            method: 'GET',
            contentType: 'application/json',
            async: false,
            success: (data: Success) => {
                console.log(data)
                res = new Success();
                $.extend(res, data);
            },
            error: (msg) => {
                console.log(msg)
            }
        })

        if (res != null) {
            console.log(res);
            persons = [];
            $.extend(persons, res.data);
            console.log(persons)
        }
        return persons;
    }

    findOne(k: number): Person {
        let p = new Person();
        $.ajax({
            url: ENDPOINT.person.findById.replace("{**id}", k + ""),
            method: 'GET',
            contentType: 'application/json',
            async: false,
            success: (data: any) => {
                $.extend(p, data);
            },
            error: (msg) => {
                console.log(msg)
            }
        });
        return p;
    }

}