Clients = new Mongo.Collection('clients');
Clients.allow({
  insert: function(userId, doc) {return ownsDocument(userId, doc)},
  update: function(userId, doc) {return ownsDocument(userId, doc)}
});
