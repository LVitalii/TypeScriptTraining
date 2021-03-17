import * as Interfaces from '.././intefaces'
import { logger, logMethod, logParameter, sealed, writable, format } from '../decorators';

// @sealed('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements Interfaces.Librarian, Interfaces.C {
    @format() name: string;
    email: string;
    department: string;
    a: string;
    c: string;

    // @logMethod
    assistCustomer(/*@logParameter */ custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    // @writable(true)
    assistFaculty() {
        console.log('Assist faculty');
    }

    // @writable(false)
    teachCommunity() {
        console.log('Teaching community')
    }
}