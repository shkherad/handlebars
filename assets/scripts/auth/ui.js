'use strict';

const app = require('../app.js');
const bookApi = require('../books/book_api.js');

const success = (data) => {
  if (data) {
    console.log(data);
    console.log('success')
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  $('article').append("<button id='show-books'>Show All Books</button>")
  $('article').append("<button id='show-titles'>Show All Titles</button>")

};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
};

const showBooks = function(){
  bookApi.getBooks();
}

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
