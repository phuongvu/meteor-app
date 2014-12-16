Template.applicationsList.helpers({
    applications: function() {
        return Applications.find();
    }
});