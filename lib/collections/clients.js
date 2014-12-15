Clients = new Mongo.Collection('clients');
Clients.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});
