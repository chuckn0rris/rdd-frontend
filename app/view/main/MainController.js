Ext.define('Rdd.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {

    },

    openLoginOwnerForm: function() {
        Ext.create('Rdd.view.login.Login').show();
    },

    openOffer: function(widget) {
        var tabPanel = this.lookupReference('mainTabPanel');

        var offer = widget.getWidgetRecord().data,
            title = Ext.String.format("{0} {1} {2}", offer.color, offer.brand, offer.model);

        tabPanel.add({
            xtype: 'offerdetails',
            title: title,
            closable: true,
            viewModel: {
                type: 'offer',
                data: {
                    offer: offer
                }
            }
        });

        tabPanel.setActiveTab(tabPanel.items.length-1);
    },

    closeOfferDetails: function() {
        this.getView().close();
    }
});
