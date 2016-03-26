Ext.define('Rdd.view.main.Main', {
    extend: 'Ext.Viewport',
    xtype: 'mainview',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.view.View',

        'Rdd.view.ux.Urls',
        'Rdd.store.Brands',
        'Rdd.model.Owner',
        'Rdd.model.Transport',
        'Rdd.view.owner.Panel',
        'Rdd.view.main.Filters',
        'Rdd.view.main.UserBar',
        'Rdd.view.main.MainController',
        'Rdd.view.main.MainModel',
        'Rdd.view.main.OfferModel',
        'Rdd.view.main.List',
        'Rdd.view.ux.overrides.Format',
        'Rdd.view.ux.InfoLabel',
        'Rdd.view.ux.InfoIconLabel',
        'Rdd.view.main.TitlePanel',
        'Rdd.view.main.OfferDetails',

        'Rdd.ux.overrides.RequiredFieldLabelPatch'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },
    reference: 'mainView',
    layout: {
        type: 'vbox',
        align: 'center'
    },

    items: [{
        xtype: 'titlepanel',
        width: 1000,
        flex: 1
    }, {
        xtype: 'tabpanel',
        width: 1000,
        reference: 'mainTabPanel',
        flex: 3,
        items: [{
            xtype: 'mainlist',
            bind: {
                title: '{i18n.listTitle}'
            },
            reference: 'mainList',
            tbar: [{
                xtype: 'filterspanel'
            }]
        }]
    }]
});
