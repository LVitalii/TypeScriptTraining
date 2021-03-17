/* eslint-disable no-redeclare */
import { Category } from "./enums";
import { ReferenceItem, RefBook, Shelf, UniversityLibrarian } from "./classes";
import { Book, Logger, Person, Author, Librarian, C, Magazine } from './intefaces';
import { purge, createCustomerID, createCustomer, getProperty, getBookByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './functions';
import type { Library } from './classes';
import { BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from "./types";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//Tasks implementation:
//Results:
// console.log(getAllBooks());
// console.log(logFirstAvailable(getAllBooks()));
// console.log(getBookTitleByCategory(Category.JavaScript));
// console.log(logBookTitles(getBookTitleByCategory(Category.JavaScript)));
// console.log(getBookAutorByIndex(1));
// console.log(calcTotalPages());

//Task 03.01
const myId: string = createCustomerID('Vit', 11);
// console.log(myId);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}.${name}`;
idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 12));
// console.log(createCustomerID('Mine', 13));

//Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 18);
// createCustomer('Anna', 20, 'Kyiv');
// console.log(getBookTitleByCategory());
// logFirstAvailable(); //investigate

// console.log(getBookID(1));

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// const myBooks = сheckoutBooks('Ann', ...[1, 2, 4]);
// console.log(myBooks);

//Task 03.03
// console.log(getTitles(4, true));
// console.log(getTitles('Liang Yuxian Eugene'));

//Task 03.04
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(123));

//Task 04.01
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    // year: 2015,
    // copies: 3
    // markDamaged?: (reason: string) => `Damaged: ${reason}`
    // markDamaged?: (reason: string) => `Damaged: ${reason}` //not finished
};

// printBook(myBook);
// console.log(myBook.markDamaged('accidentially'));

const logDamage: Logger = (reason: string) => `Damaged: ${reason}`;
// console.log(logDamage('something missing'));

//Task 04.03
const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@email.com',
    numBooksPublished: 3
};

const favoriteLibrarian: Librarian = {
    name: 'Boris',
    email: 'boris@email.com',
    department: 'Classical Literation',
    assistCustomer(custName) {
        console.log(custName);
    }
};

//Task 04.04
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

// a. offer.magazine
// b. offer.magazine.getTitle()
// c. offer.book.getTitle()
// d. offer.book.authors[0]
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.author?.[0]);

//Task 04.05
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

//Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'TypeScript', 2021);
// ref.printItem();
// console.log(ref);
// ref.publisher = 'Publisher';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02
const refBook = new /*Encyclopedia*/ RefBook(1, 'TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printItem();

//Task 05.03
// console.log(refBook);
// refBook.printCitation();

//Task 05.04
const favoriteLibrarian2: Librarian = new UniversityLibrarian();
// favoriteLibrarian2.name = 'Anna';
// favoriteLibrarian2.assistCustomer('Boris');

//Task 05.05
// const personBook: PersonBook = {
//     id: 1,
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     email: 'anna@example.com',
//     title: 'TypeScript'
// }

// Task 06.05
// if (true)
//     import('./classes').then(module => {
//         console.log(new module.Reader());
//     })

// Task 06.06
// let lib: Library;
// lib = new Library();
// lib = {
//     id: 1,
//     name: 'anna',
//     address: 'unknown'
// }

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// const result: Book[] = purge<Book>(inventory);
// console.log(result);

// Task 07.02
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mgz => magazineShelf.add(mgz));

// console.group('07.02'); //for grouping in console
// console.log(magazineShelf.getFirst());
// console.groupEnd();

// Task 07.03
// magazineShelf.printTitle();
// console.log(magazineShelf.find('Five Points'));

// console.log(getProperty(magazines[0], 'title'));

// Task 07.04
// const book: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Unknown'
// }

// const b: UpdatedBook = {
//     id: 1,
//     author: 'Boris'
// }

// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// Task 08.01, 08.02
// const l = new UniversityLibrarian();
// l.name = 'Anna';
// console.log(l);
// l['printLibrarian']();

// Task 08.03
// const l = new UniversityLibrarian();
// l.assistFaculty = null;
// l.teachCommunity = null;
// console.log(l);

// Task 08.04
// const e = new RefBook(1, 'Unknown', 2021, 2);
// e.printItem();

// Task 08.05, 08.06
// const l = new UniversityLibrarian();
// l.name = 'Anna';
// console.log(l.name);
// l.assistCustomer('Boris');
// console.log(l);

// Task 08.07
// const e = new RefBook(1, 'Unknown', 2021, 2);
// e.copies = 10;
// e.copies = 0;
// e.copies = 1.1;

// Task 09.01
// console.log('Start');
// getBookByCategory(Category.JavaScript, logCategorySearch);
// getBookByCategory(Category.Software, logCategorySearch);
// console.log('Finish');

// Task 09.01
// console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => { console.log(titles); return titles.length; })
//     .then(numOfBooks => console.log(numOfBooks))
//     .catch(err => console.log(err));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(err => console.log(err));
// console.log('Finish');

// Task 09.01
console.log('Start');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(err => console.log(err));
console.log('Finish');