const BASE_URL = "http://localhost:1998/api_v1";

export const ENDPOINT = {
    person: {
        list: `${BASE_URL}/person`,
        findById: `${BASE_URL}/person/{**id}`
    }
};

export const METHOD_HTTP = {
    get: 'GET',
    post: 'POST'
};
