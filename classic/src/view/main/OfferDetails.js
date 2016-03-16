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

    layout: 'vbox',

    items: [{
        xtype: 'container',
        width: '100%',
        layout: 'hbox',
        items: [{
            xtype: 'fieldset',
            title: 'Details',
            margin: '0 10 10 10',
            layout: 'hbox',
            flex: 2,
            items: [{
                xtype: 'panel',
                layout: 'vbox',
                width: 300,
                height: 300,
                margin: '5 10 10 10',
                border: true,
                items: [{
                    xtype: 'container',
                    width: '100%',
                    height: 200,
                    bind: {
                        html: '<div align="center"><img style="max-height: 200px; max-width: 300px; padding: 5px;" src="{offer.photo}"/></div>'
                    }
                }, {
                    xtype: 'container',
                    width: '100%',
                    flex: 1,
                    layout: 'hbox',
                    autoScroll: true,
                    items: [{
                        xtype: 'dataview',
                        height: '100%',
                        bind: {
                            data: '{offer.photos}'
                        },
                        cls: 'rdd-main-offerdetails-images-view',
                        tpl: [
                            '<tpl for=".">',
                                '<div class="thumb-wrap" id="{name:stripTags}">',
                                    '<div class="thumb"><img align="center" valign="center" src="{url}"></div>',
                                '</div>',
                            '</tpl>',
                            '<div class="x-clear"></div>'
                        ],
                        itemSelector: 'div.thumb-wrap',
                        emptyText: 'No images to display'
                    }]
                }]
            }, {
                xtype: 'container',
                defaults: {
                    xtype: 'infolabel',
                    width: '100%'
                },
                items: [{
                    xtype: 'label',
                    margin: 5,
                    bind: '<b>{offer.brand} {offer.model}</b>, {offer.year}, {offer.color} color'
                }, {
                    label: 'Mileage',
                    bind: {
                        value: '{offer.mileage}'
                    }
                }, {
                    label: 'District',
                    bind: {
                        value: '{offer.district}'
                    }
                }, {
                    label: 'Description',
                    bind: {
                        value: '{offer.desc}'
                    }
                }]
            }]
        }, {
            xtype: 'fieldset',
            title: 'Contacts',
            flex: 1,
            layout: 'vbox',
            height: '100%',
            margin: '0 10 10 0',
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
                    value: '<a href="mailto:{offer.publicEmail}" target="_blank">{offer.publicEmail}</a>'
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
                    value: '<a href="{offer.socialContacts.facebook}" target="_blank">Open in Facebook</a>'
                }
            }, {
                label: 'Skype',
                bind: {
                    value: '{offer.socialContacts.skype}'
                }
            }]
        }]
    }, {
        xtype: 'container',
        width: '100%',
        layout: 'hbox',
        items: [{
            xtype: 'fieldset',
            title: 'Prices',
            margin: '0 10 10 10',
            flex: 2,
            defaults: {
                xtype: 'infolabel',
                width: '100%'
            },
            items: [{
                xtype: 'label',
                margin: 5,
                bind: {
                    hidden: '{!offer.isAvailable}'
                },
                html: '<span style="color: green;">Available right now!</b></span>'
            }, {
                label: '1 day',
                bind: {
                    value: '{offer.prices.perDay}'
                }
            }, {
                label: '1 week',
                bind: {
                    value: '{offer.prices.perWeek}'
                }
            }, {
                label: '1 month',
                bind: {
                    value: '{offer.prices.perMonth}'
                }
            }, {
                label: '1 month (3 months cotract)',
                bind: {
                    value: '{offer.prices.perMonth3m}'
                }
            }, {
                label: '1 month (6 months contract)',
                bind: {
                    value: '{offer.prices.perMonth6m}'
                }
            }, {
                label: '1 month (1 year contract)',
                bind: {
                    value: '{offer.prices.perMonth1y}'
                }
            }]
        }]
    }]
})