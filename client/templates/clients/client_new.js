Template.newClient.events({
  'submit form': function(e) {
    e.preventDefault();

    var client = {
      firstName: $(e.target).find('[name=firstname]').val(),
      lastName: $(e.target).find('[name=lastname]').val(),
      dob: $(e.target).find('[name=dob]').val(),
      address: $(e.target).find('[name=address]').val(),
      phone: $(e.target).find('[name=phone]').val(),
      email: $(e.target).find('[name=email]').val()
    };
    client.agentId = Meteor.userId();
    client._id = Clients.insert(client);
    console.log('id', client._id);
    Router.go('clientsList');
  }
});