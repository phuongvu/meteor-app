Meteor.publish('clients', function () {
  return Clients.find({agentId: this.userId});
});

Meteor.publish('applications', function(id) {
  check(id, String);
  return Applications.find({'clientId': id});
});
