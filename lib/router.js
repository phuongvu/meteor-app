Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('applications')] }
});

Router.onBeforeAction('dataNotFound', {only: 'applicationPage'});

Router.route('/', {name: 'about'});
Router.route('/clients', {name: 'clientsList'});
Router.route('/add-new-client', {name: 'newClient'});
Router.route('/add-new-application', {name: 'newApplication'});

Router.route('/notifications', {name: 'notificationsList'});
Router.route('/campaigns', {name: 'campaignsList'});

Router.route('/applications/:_id', {name: 'applicationPage'});
