Ext.define('Rdd.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Rdd.view.main.MainController',
        'Rdd.view.main.MainModel',
        'Rdd.view.main.List',
        'Rdd.view.main.TitlePanel'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'vbox',

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
