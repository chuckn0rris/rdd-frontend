Ext.define('Rdd.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.view.View',

        'Rdd.view.main.MainController',
        'Rdd.view.main.MainModel',
        'Rdd.view.main.OfferModel',
        'Rdd.view.main.List',
        'Rdd.view.ux.InfoLabel',
        'Rdd.view.ux.InfoIconLabel',
        'Rdd.view.main.TitlePanel',
        'Rdd.view.main.OfferDetails'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: {
        type: 'vbox',
        align: 'center'
    },

    items: [{
        xtype: 'titlepanel',
        flex: 1,
        width: 1000
    }, {
        xtype: 'tabpanel',
        reference: 'mainTabPanel',
        width: 1000,
        flex: 2,
        items: [{
            xtype: 'mainlist'
        }]
    }]
});
