var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    isAdmin   : { type: 'boolean' },
    projects : { collection: 'ProjectParticipants', via: 'participant'}
  }
};

module.exports = User;
