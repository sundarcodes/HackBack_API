/**
* Feedback.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	given_by : { type: 'string' },
    positives : { type: 'string'},
    areasToImprove : { type: 'string'},
    visualAppeal : {type: 'integer' },
    technicalDifficulty : {type: 'integer' },
    completeness : {type: 'integer' },
    overallFeel : {type: 'integer' },
  	project : { model: 'Project' }
  }
};

