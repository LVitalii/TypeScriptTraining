showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


//Tasks implementation:

function getAllBooks(): any[] {
    const books = [{ id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
    { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
    { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
    { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

function logFirstAvailable(books: any[]) {
    console.log(`Number of books: ${books.length}`);
    //case 1:
    const bookAvailable = books.find((book: any) => book.available);
    //case 2:
    // const book = books.find((book: { available: boolean }) => book.available);
    //case 3:
    // let bookAvailable: any;
    // for (const book of books) {
    //     if (book.available) {
    //         bookAvailable = book;
    //         break; ``
    //     }
    // }
    console.log(`First available book: ${bookAvailable.title}`);
}


enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

function getBookTitleByCategory(category: Category): Array<string> {
    const books = getAllBooks();
    return books.filter((book: any) => book.category === category).map((book: any) => book.title);
}

function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

function getBookAutorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

function calcTotalPages(): bigint {
    const data: any[] = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    // case 1:
    // let totalPages: bigint = 0n;
    // data.forEach(element => {
    //     totalPages = totalPages + BigInt(element.books) * BigInt(element.avgPagesPerBook);
    // });
    // return totalPages;

    // case 2:
    // let totalPages: bigint = 0n;
    // for (const element of data) {
    //     console.log(element);
    //     totalPages = totalPages + BigInt(element.books) * BigInt(element.avgPagesPerBook);
    // }
    // return totalPages;

    // case 3:
    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
}

//Results:
console.log(getAllBooks());
console.log(logFirstAvailable(getAllBooks()));
console.log(getBookTitleByCategory(Category.JavaScript));
console.log(logBookTitles(getBookTitleByCategory(Category.JavaScript)));
console.log(getBookAutorByIndex(1));
console.log(calcTotalPages());