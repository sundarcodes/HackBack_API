/**
* Project_particpants.js
*
* @description :: This model is a mapping between projects and participants
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    project : { model: 'Project' },
    participant : { model: 'User' }
  }
};

