import {Author} from "./author";
export class Book {
    id: String;
    title: String;
    author: Author;
    constructor(title = '', author = new Author()) {
        this.title = title;
        this.author = author;
        this.id = Math.random().toString(36).substring(7);
    }
    static getTestData(authors : Author[]) : Book[] {
        return [
            new Book('Pan Tadeusz', authors[0]),
            new Book('Krzyżacy', authors[1]),
            new Book('Lalka', authors[2])
        ];
    }
}
