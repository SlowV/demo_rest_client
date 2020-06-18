import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonService} from "./service/PersonService";

$(document).ready(function () {
    // init Service class
    let personService = new PersonService();

    // Call service
    let persons = personService.getAll();
    let person = personService.getOne(1);

    // binding data
    bindDataPerson(person);
    bindData(persons);

    // handle event
    event_click();


    function event_click() {
        $("#btn-search").click(function () {
            // @ts-ignore
            let keyword: string = $("input[name='keyword']").val();
            bindData(personService.getAll(keyword, 1, 10));
        });
    }

});

function bindData(persons: Person[]) {
    let ulEle = $("#persons");
    if (persons.length == 0) {
        ulEle.html("<li>Khong co person nao</li>");
    } else {
        let content = "";
        persons.forEach(person => {
            content += `<li>${person.id} - ${person.name} - ${person.age} - ${person.salary}</li>`;
        })
        ulEle.html(content);
    }
}

function bindDataPerson(p: Person) {
    $("#findById").html(JSON.stringify(p));
}

