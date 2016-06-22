'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');


const addHandlers = () => {
  $('#show-books').on('click', onShowBooks);

};
//
module.exports = {
  addHandlers,
};
