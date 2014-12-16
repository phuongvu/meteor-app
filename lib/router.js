Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};

Router.onBeforeAction('dataNotFound', {only: 'applicationPage'});
Router.onBeforeAction(requireLogin, {except: ['about']});

Router.route('/', {name: 'about'});
Router.route('/clients', {name: 'clientsList'});
Router.route('/clients/add-new-client', {name: 'newClient'});
Router.route('/clients/:_id', {name: 'clientPage',
  waitOn: function() {
    return [
      Meteor.subscribe('applications', this.params._id)
    ];
  },
  data: function() {
  Session.set('clientId', this.params._id);
  return Clients.findOne(this.params._id);
}});
Router.route('/clients/:_id/applications/add-new-application', {name: 'newApplication'});
Router.route('/clients/:_id/applications/:applicationId', {name: 'applicationPage', data: function() {
  return Applications.findOne(this.params.applicationId);
}});

Router.route('/notifications', {name: 'notificationsList'});
Router.route('/campaigns', {name: 'campaignsList'});


