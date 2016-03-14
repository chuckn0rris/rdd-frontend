Ext.define('Rdd.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Rdd.view.main.MainController',
        'Rdd.view.main.MainModel',
        'Rdd.view.main.List',
        'Rdd.view.main.TitlePanel',
        'Rdd.view.main.OfferDetails'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: {
        type: 'vbox',
        pack: 'center'
    },

    items: [{
        xtype: 'titlepanel',
        flex: 2,
        width: '100%'
    }, {
        xtype: 'mainlist',
        width: '100%',
        flex: 3
    }]
});
