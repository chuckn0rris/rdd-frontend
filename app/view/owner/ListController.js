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

    removeTransport: function(grid, rowIndex) {
        var transport = grid.getStore().getAt(rowIndex);
        Ext.Msg.confirm('Confirm action', 'Are you sure you want to delete this item?', function (choice) {
            if (choice === 'yes') {
                Ext.Ajax.request({
                    url: Urls.get('deletetransport', transport.get('owner'), transport.get('id')),
                    method: 'DELETE',
                    success: function() {
                        grid.getStore().reload();
                    },
                    scope: this
                });
            }
        });
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