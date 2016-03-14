Ext.define('Rdd.view.main.OfferDetails', {
    extend: 'Ext.window.Window',
    xtype: 'offerdetails',

    title: 'Offer details',
    modal: true,
    width: 400,

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
        xtype: 'fieldset',
        margin: 10,
        bind: {
            title: '{offer.firstName} {offer.lastName}, {offer.company}'
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'Phone',
            width: '100%',
            bind: '{offer.phone}'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Mobile',
            width: '100%',
            bind: '{offer.mobilePhone}'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Email',
            width: '100%',
            bind: '{offer.publicEmail}'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Whatsapp',
            width: '100%',
            bind: '{offer.socialContacts.whatsapp}'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Viber',
            width: '100%',
            bind: '{offer.socialContacts.viber}'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Facebook',
            width: '100%',
            bind: '{offer.socialContacts.facebook}'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Skype',
            width: '100%',
            bind: '{offer.socialContacts.skype}'
        }]
    }],

    buttons: [{
        text: 'Close',
        handler: 'closeOfferDetails'
    }]
})