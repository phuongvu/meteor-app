Template.applicationsList.helpers({
    posts: function() {
        return Applications.find();
    }
});