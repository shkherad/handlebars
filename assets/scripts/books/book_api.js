'use strict';

const app = require('../app.js');
const bookUi = require('../books/book_ui.js');

let getBooks = function(){
  return $.ajax({
    url: app.host + "/books",
    // method: 'GET',
    // dataType: 'json'
  }).done(bookUi.displayBooks);
};

module.exports = {
  getBooks,
}
