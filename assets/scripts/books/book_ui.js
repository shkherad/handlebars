'use strict';

let displayBooks = function(books){
  let bookListingTemplate = require('../templates/book-listing.handlebars');
    $('.content').append(bookListingTemplate(books))
};

module.exports = {
  displayBooks
}
