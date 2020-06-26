import {Task} from "../domain/Task";

const BASE_URL = "http://localhost:1998/api_v1";

export const ENDPOINT = {
    person: {
        findAll: `${BASE_URL}/person`,
        findOne: `${BASE_URL}/person/{**?}`,
        update: `${BASE_URL}/person/update`
    },
    task: {
        findByPersonId: `${BASE_URL}/task?personId={**?}`,
        save: `${BASE_URL}/task/store`
    }
};

export const METHOD_HTTP = {
    Get: 'GET',
    Post: 'POST',
    Put: 'PUT'
};

export enum LOAD_DATA_MODE {
    Cache, Refresh
}

export enum HTTP_STATUS {
    CREATED = 201,
    OK = 200,
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
}

export enum Locale {
    VN = 'vi',
    EN = 'en'
}

export class ObjectUtils {
    isTask(object: any): object is Task {
        return object instanceof Task;
    }
}
