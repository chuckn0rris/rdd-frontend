Ext.define('Rdd.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {

    },

    openLoginOwnerForm: function() {
        Ext.create('Rdd.view.login.Login').show();
    }
});
