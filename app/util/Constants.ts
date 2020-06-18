const BASE_URL = "http://localhost:1998/api_v1";

export var ENDPOINT = {
    person: {
        list: `${BASE_URL}/person`,
        findById: `${BASE_URL}/person/{**id}`
    },
    account: `${BASE_URL}/account`
}