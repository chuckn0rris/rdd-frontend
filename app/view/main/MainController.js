Ext.define('Rdd.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {

    },

    openLoginOwnerForm: function() {
        Ext.create('Rdd.view.login.Login').show();
    },

    openTransportDetails: function(widget) {
        this.getView();

        // get current offer
        var offer = widget.getWidgetRecord().data;
        this.getViewModel().set('offer',offer);
        Ext.create('Rdd.view.main.OfferDetails').show();

    }
});
