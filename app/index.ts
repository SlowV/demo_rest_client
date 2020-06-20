import 'jquery';
import 'bootstrap';
import {Person, Status} from './domain/Person';
import {PersonService} from './service/PersonService';

export class Index {
    private personService = new PersonService();

    constructor() {
        // init Service class
        // Call service
        let persons = this.personService.getAll();

        // binding data
        this.bindData(persons);

        // Init event
        this.on_click();
        this.on_change();

        Index.configUI();
    }

    private bindData(persons: Person[]): void {
        let ulEle = $('#persons');
        if (persons.length == 0) {
            ulEle.html('<div> Không có person nào</div>');
        } else {
            let content = '';
            let htmlTask = '';
            persons.forEach((person: Person, index: number) => {
                content += `<tr>
                                <th scope="row">${index + 1}</th>
                                <td>${person.id}</td>
                                <td>${person.name}</td>
                                <td>${person.age}</td>
                                <td>${person.salaryFormat}</td>
                                <td>${person.dobFormat}</td>
                                <td>
                                    ${person.status == Status.ACTIVE ? `<span class="badge badge-success">${person.statusStr}</span>` : `<span class="badge badge-warning">${person.statusStr}</span>`} 
                                </td>
                                <td class="text-center">
                                    <button class="btn-transparent" data-toggle="tooltip" data-placement="top" id="btn-show-task" data-id="${person.id}" title="Xem công việc" >
                                        <i class="fa fa-tasks" aria-hidden="true"></i>
                                    </button> 
                                    <button class="btn-transparent" id="btn-edit-person" title="Sửa" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                                        <i class="fa fa-edit" aria-hidden="true"></i>
                                    </button>
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
            this.bindData(this.personService.getAll(keyword));
        });

        $('#persons').on('click', '#btn-show-task', function() {
            $('#taskModal').modal('show');
        });
    }

    private on_change(): void {
        $('.filter select[name="status"]').on('change', () => {
            // @ts-ignore
            let valOpt: string = $('.filter select[name="status"] option:checked').val();

            if (valOpt != 'ALL') {
                this.bindData(this.personService.getAll(undefined, valOpt));
            } else {
                this.bindData(this.personService.getAll());
            }
        })
    }

    private static configUI(): void {
        $('[data-toggle="tooltip"]').tooltip();
    }

}

$(document).ready(function () {
    new Index();
});
