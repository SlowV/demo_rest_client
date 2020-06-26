export class Task {
    id: number;
    title: string;
    description: string;
    personId: number;
    image: string;

    addData(id: number, title: string, description: string, personId: number, image: string): Task {
        this.id = id;
        this.title = title;
        this.description = description;
        this.personId = personId;
        this.image = image;
        return this;
    }
}
