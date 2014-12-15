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
Router.route('/add-new-application', {name: 'newApplication'});

Router.route('/notifications', {name: 'notificationsList'});
Router.route('/campaigns', {name: 'campaignsList'});

Router.route('/applications/:_id', {name: 'applicationPage'});
