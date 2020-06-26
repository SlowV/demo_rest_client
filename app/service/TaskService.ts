import {Task} from "../domain/Task";
import {Model} from "../model/Model";
import {ENDPOINT, HTTP_STATUS, Locale, METHOD_HTTP} from "../util/Constants";
import {Success} from "../domain/rest/Success";
import {Error} from "../domain/rest/Error";

export class TaskService {
    store(task: Task): any {
        let url = ENDPOINT.task.save;
        let result: Task | Error = null;
        Model.callServer(url, METHOD_HTTP.Post, false, task)
            .done((res: Success) => {
                if (res.status == HTTP_STATUS.CREATED) {
                    let temp = res.data as Task;
                    result = new Task().addData(temp.id, temp.title, temp.description, temp.personId, temp.image);
                }
            })
            .fail((res) => {
                let temp = res.responseJSON as Error;
                result = new Error(temp.errors, temp.status, temp.message);
            });
        return result;
    }
}

