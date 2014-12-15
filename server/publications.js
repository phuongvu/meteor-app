Meteor.publish('clients', function () {
  return Clients.find({agentId: this.userId});
});

