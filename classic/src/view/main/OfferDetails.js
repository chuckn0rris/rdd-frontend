Ext.define('Rdd.view.main.OfferDetails', {
    extend: 'Ext.window.Window',
    xtype: 'loginform',
    controller: 'login',

    title: 'Offer details',
    modal: true,
    width: 350,
    layout: 'vbox',
    padding: 10,
    defaults: {
        padding: 5
    },

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    config: {
        offer: null
    },

    bind: {
        offer: '{currentOffer}'
    },

    items: [{
        xtype: 'displayfield',
        fieldLabel: 'Model',
        width: '100%',
        bind: '{offer.brand} {offer.model}'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Color',
        width: '100%',
        bind: '{offer.color}'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Year',
        width: '100%',
        bind: '{offer.year}'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Model',
        width: '100%',
        bind: '{offer.brand} {offer.model}'
    }, {

    }]
})