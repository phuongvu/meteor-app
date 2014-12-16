Applications = new Mongo.Collection('applications');
Applications.allow({
  insert: function(userId, doc) {return !!userId},
  update: function(userId, doc) {return !!userId}
});
