Template.newApplication.events({
  'submit form': function(e) {
    e.preventDefault();
    var application = {
      title: $(e.target).find('[name=title]').val(),
      type: $(e.target).find('[name=type]').val(),
      amount: $(e.target).find('[name=amount]').val(),
      description: $(e.target).find('[name=description]').val(),
      location: Session.get('loc'),
      status: 'Initiated'
    };

    application.agentId = Meteor.userId();
    application.clientId = Session.get('clientId');

    application._id = Applications.insert(application);
    Router.go('clientPage', {'_id': application.clientId});
  }
});

Template.newApplication.helpers({
  clientId: function() {
    return Session.get('clientId');
  }
});

