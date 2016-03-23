Ext.define('Rdd.view.owner.OwnerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.owner',

    addRecord: function() {
        alert('add record');
    },

    redirectHome: function() {
        this.redirectTo('home');
    },

    logout: function() {

    },

    editProfile: function() {
        Ext.create('Rdd.view.owner.EditProfile').show();
    },

    checkLinkAvailable: function() {

    },

    closeProfileWindow: function() {
        this.getView().close();
    }
});
