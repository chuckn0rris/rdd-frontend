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
            title = Ext.String.format("{0} {1} {2}", offer.color, offer.brand, offer.model),
            offerTab = tabPanel.down('#offer-'+offer.id);

        if (offerTab) {
            tabPanel.setActiveTab(offerTab);
        } else {
            tabPanel.add({
                xtype: 'offerdetails',
                id: 'offer-'+offer.id,
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
        }
    },

    closeOfferDetails: function() {
        this.getView().close();
    },

    applyFilters: function() {
        var filters = this.getView().getValues();
            grid = this.getView().up('mainlist'),
            proxy = grid.getStore().getProxy();

        // proxy.setExtraParams(filters);
    },

    resetFilters: function() {
        this.getView().reset();
        // this.getView().up('mainlist').getStore().getProxy().setExtraParams({});
    }
});
