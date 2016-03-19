Ext.define('Rdd.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    loginOwner: function() {
        var values = this.getView().down('form').getValues();

        this.renderOwnerUI();

        // waiting for registration api
        return;

        Ext.Ajax.request({
            url: '/login',
            method: 'POST',
            params: values,
            success: function(xhr) {
            },
            failure: function(xhr) {
            },
            scope: this
        })
    },

    renderOwnerUI: function() {
        this.getViewModel().set('ownerMode', true);
        this.getView().close();
    }
});
