Template.clientPage.helpers({
  applications: function() {

    return Applications.find({clientId: this._id});
  }
});

Template.clientPage.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentClientId = this._id;
    var client = {
      firstName: $(e.target).find('[name=firstname]').val(),
      lastName: $(e.target).find('[name=lastname]').val(),
      dob: $(e.target).find('[name=dob]').val(),
      address: $(e.target).find('[name=address]').val(),
      phone: $(e.target).find('[name=phone]').val(),
      email: $(e.target).find('[name=email]').val()
    };
    client.agentId = Meteor.userId();
    client._id = Clients.update({_id: currentClientId},  {$set: client}, function(error) {
      if (error) {
        console.log(error.reason);
      } else {
        Router.go('clientPage', {_id: currentClientId});
      }
    });
  }
});
