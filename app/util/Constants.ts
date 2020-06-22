const BASE_URL = "http://localhost:1998/api_v1";

export const ENDPOINT = {
    person: {
        findAll: `${BASE_URL}/person`,
        findOne: `${BASE_URL}/person/{**?}`
    },
    task: {
        findByPersonId: `${BASE_URL}/task?personId={**?}`
    }
};

export const METHOD_HTTP = {
    Get: 'GET',
    Post: 'POST'
};

export enum LOAD_DATA_MODE {
    Cache, Refresh
}

export enum HTTP_STATUS {
    OK = 200,
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
}
