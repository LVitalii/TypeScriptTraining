import { timeout } from "../decorators";

export abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new Reference Item...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    #id: number;
    private _publisher: string;

    static department: string = 'Classical Literature';
    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log(`${this.title} title was published in ${this.year} year`);
        this.#id = id;
    }

    getID(): number {
        return this.#id;
    }

    @timeout(3000)
    printItem(): void {
        console.log(`${this.title} title was published in ${this.year} year`);
        console.log(ReferenceItem.department);
    }

    abstract printCitation(): void;
}