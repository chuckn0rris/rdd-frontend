Ext.define('Rdd.view.main.OfferDetails', {
    extend: 'Ext.Panel',
    xtype: 'offerdetails',

    controller: 'main',

    config: {
        offer: null
    },

    bind: {
        offer: '{offer}'
    },

    modal: true,
    border: true,
    defaults: {
        padding: 5
    },

    items: [{
        xtype: 'container',
        layout: 'vbox',
        margin: 10,
        defaults: {
            xtype: 'infolabel',
            width: '100%'
        },
        items: [{
            xtype: 'label',
            margin: 5,
            bind: '<b>{offer.firstName} {offer.lastName}, {offer.company}</b>'
        }, {
            label: 'Phone',
            bind: {
                value: '{offer.phone}'
            }
        }, {
            label: 'Mobile',
            bind: {
                value: '{offer.mobilePhone}'
            }
        }, {
            label: 'Email',
            bind: {
                value: '{offer.publicEmail}'
            }
        }, {
            label: 'Whatsapp',
            bind: {
                value: '{offer.socialContacts.whatsapp}'
            }
        }, {
            label: 'Viber',
            bind: {
                value: '{offer.socialContacts.viber}'
            }
        }, {
            label: 'Facebook',
            bind: {
                value: '<a href="{offer.socialContacts.facebook}" target="_blank">{offer.socialContacts.facebook}</a>'
            }
        }, {
            label: 'Skype',
            bind: {
                value: '{offer.socialContacts.skype}'
            }
        }]
    }],

    buttons: [{
        text: 'Close',
        handler: 'closeOfferDetails'
    }]
})