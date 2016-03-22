Ext.define('Rdd.view.owner.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.transportlist',

    editTransport: function() {

    },

    removeTransport: function() {

    },

    openOffer: function(widget) {
        var tabPanel = this.view.up('tabpanel'),
            offer = widget.getWidgetRecord().data,
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
                        offer: offer,
                        isUserPage: this.getViewModel().get('isUserPage')
                    }
                }
            });

            tabPanel.setActiveTab(tabPanel.items.length-1);
        }
    }
});
