Ext.define('Rdd.view.owner.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.transportlist',

    editTransport: function(view, rowIdx, colIdx, item, evnt, record) {
        var data = Ext.clone(record.data),
            mainTabPanel = this.getView().up('tabpanel'),
            title = Ext.String.format("{0} {1} {2}", data.color, data.brand, data.model);

        mainTabPanel.add({
            xtype: 'edittransport',
            title: title,
            closable: true,
            viewModel: {
                data: data
            }
        });

        mainTabPanel.setActiveTab(mainTabPanel.items.length-1);
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
                        isOwnPage: this.getViewModel().get('isOwnPage')
                    }
                }
            });

            tabPanel.setActiveTab(tabPanel.items.length-1);
        }
    }
});