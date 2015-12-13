/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { type: 'string' },

    start_date : { type: 'date' },

    end_date : { type: 'date' },

    is_active : { type: 'boolean' },

    projects : { collection: 'Project', via: 'event' }
  }
};

