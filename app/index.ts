import $ = require("jquery");
import {Person, Status} from "./domain/Person";
import {PersonService} from "./service/PersonService";

export class Index {
    private personService = new PersonService();

    public init() {
        // init Service class
        // Call service
        let persons = this.personService.getAll();

        // binding data
        this.bindData(persons);

        // Init event
        this.on_click();
        this.on_change();
    }

    private bindData(persons: Person[]): void {
        let ulEle = $("#persons");
        if (persons.length == 0) {
            ulEle.html("<div>Khong co person nao</div>");
        } else {
            let content = "";
            persons.forEach((person, index) => {
                content += `<tr>
                                <th scope="row">${index + 1}</th>
                                <td>${person.id}</td>
                                <td>${person.name}</td>
                                <td>${person.age}</td>
                                <td>${person.salaryFormat}</td>
                                <td>${person.dob}</td>
                                <td>
                                    ${person.status == Status.ACTIVE ? `<span class="badge badge-success">${person.statusStr}</span>` : `<span class="badge badge-warning">${person.statusStr}</span>`} 
                                </td>
                            </tr>`;
            });
            ulEle.html(content);
        }
    }

    private on_click(): void {
        $("#btn-search").on('click', () => {
            // @ts-ignore
            let keyword: string = $("input[name='keyword']").val();
            this.bindData(this.personService.getAll(keyword, null, 1, 10));
        })
    }

    private on_change(): void {
        $('.filter select[name="status"]').on('change', () => {
            // @ts-ignore
            let valOpt: string = $('.filter select[name="status"] option:checked').val();
            if (valOpt != 'ALL') {
                this.bindData(this.personService.getAll(null, valOpt, 1, 10));
            } else {
                this.bindData(this.personService.getAll());
            }
        })
    }
}

$(document).ready(function () {
    new Index().init();
});
