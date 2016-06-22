'use strict';

// user require with a reference to bundle the file and use it in this file
// let example = require('./example');

const authEvents = require('./auth/events.js');
const bookApi = require('./books/book_api.js');





// bookApi.getBooks();

// On document ready
$(() => {
  authEvents.addHandlers();

});
