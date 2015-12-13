/**
* Projects.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name : { type: 'string' },
    desc : { type: 'string'},
    techStack : { type: 'array' },
    repoLink : { type: 'string' },
    participants: { collection: 'ProjectParticipants', via: 'project' },
    feedbacks: { collection: 'Feedback', via: 'project' },
    event : { model: 'Event' }
  }
};

