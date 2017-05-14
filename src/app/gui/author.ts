export class Author {
    id: String;
    name: String;
    constructor(name : String = '') {
        this.name = name;
        this.id = Math.random().toString(36).substring(7);
    }
    static getTestData() : Author[]{
        return [
            new Author('Adam Mickiewicz'),
            new Author('Henryk Sienkiewicz'),
            new Author('Stefan Żeromski')
        ];
    }
}