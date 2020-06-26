
export class Error {
    errors: Map<string, string> ;
    status: number;
    message: string;

    constructor(errors: Map<string, string>, status: number, message: string) {
        this.errors = errors;
        this.status = status;
        this.message = message;
    }
}
