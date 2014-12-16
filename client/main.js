Meteor.subscribe('clients');
Meteor.subscribe('applications');

Session.set('loc','?');
console.log(Modernizr.geolocation);

function foundLocation(location) {
  Session.set('loc','lat: '+location.coords.latitude+', lan: '+ location.coords.longitude);
}
function noLocation() {
  alert('no location');
}
Template.newClient.getUserLocation = function () {
  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
    outpout = Session.get('loc');
  }
  return Session.get('loc');
};
