"use strict";
const book = {
    name: 'Над пропостью во ржи_2',
    isbn: '123123123'
};
const container = document.getElementById('content');
if (container) {
    container.textContent = `Название книги ${book.name}, ISBN: ${book.isbn}`;
}
