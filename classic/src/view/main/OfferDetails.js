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

    autoScroll: true,
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
                        html:   '<div align="center">' +
                                    '<a href="{offer.photo}" data-lightbox="image-{offer.transportId}">' +
                                        '<img style="max-height: 200px; max-width: 300px; padding: 5px;" src="{offer.photo}"/>' +
                                    '</a>' +
                                '</div>'
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
                                    '<div class="thumb">',
                                        '<a href="{url}" data-lightbox="image-{transportId}">',
                                            '<img src="{url}">',
                                        '</a>',
                                    '</div>',
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
                layout: 'form',
                flex: 1,
                defaults: {
                    xtype: 'infolabel',
                    width: '100%'
                },
                items: [{
                    xtype: 'label',
                    bind: {
                        html: '<div><b>{offer.brand} {offer.model}</b>, {offer.year}, {offer.color} color</div>'
                    }
                }, {
                    label: 'Mileage',
                    bind: {
                        value: '{offer.mileage:distance}'
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
                }, {
                    xtype: 'label',
                    bind: {
                        hidden: '{!offer.isAvailable}'
                    },
                    html: '<div style="color: green;">Available right now!</div>'
                }, {
                    label: 'Available From',
                    bind: {
                        hidden: '{!offer.availableFrom}',
                        value: '{offer.availableFrom}'
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
                xtype: 'infoiconlabel',
                width: '100%'
            },
            items: [{
                xtype: 'label',
                margin: 5,
                bind: '<b>{offer.firstName} {offer.lastName}, {offer.company}</b>'
            }, {
                icon: 'resources/images/phone.png',
                label: 'Phone',
                bind: {
                    value: '{offer.phone}'
                }
            }, {
                icon: 'resources/images/mobile.png',
                label: 'Mobile',
                bind: {
                    value: '{offer.mobilePhone}'
                }
            }, {
                icon: 'resources/images/email.png',
                label: 'Email',
                bind: {
                    value: '<a href="mailto:{offer.publicEmail}" target="_blank">{offer.publicEmail}</a>'
                }
            }, {
                icon: 'resources/images/whatsapp.png',
                label: 'Whatsapp',
                bind: {
                    value: '{offer.socialContacts.whatsapp}'
                }
            }, {
                icon: 'resources/images/viber.png',
                label: 'Viber',
                bind: {
                    value: '{offer.socialContacts.viber}'
                }
            }, {
                icon: 'resources/images/facebook.png',
                label: 'Facebook',
                bind: {
                    value: '<a href="{offer.socialContacts.facebook}" target="_blank">Open in Facebook</a>'
                }
            }, {
                icon: 'resources/images/skype.png',
                label: 'Skype',
                bind: {
                    value: '{offer.socialContacts.skype}'
                }
            }]
        }]
    }, {
        xtype: 'fieldset',
        title: 'Availability',
        margin: '0 10 10 10',
        width: '100%',
        layout: 'hbox',
        items: [{
            xtype: 'panel',
            border: true,
            html: '<center><div style="padding-top:20px"><h3>Here will be calendar soon...</h3></div></center>',
            margin: 10,
            height: '100%',
            width: 350
        }, {
            xtype: 'container',
            flex: 1,
            margin: 10,
            defaults: {
                xtype: 'infolabel',
                width: '100%'
            },
            items: [{
                label: '1 day',
                bind: {
                    value: '{offer.prices.perDay:currentCurrency}'
                }
            }, {
                label: '1 week',
                bind: {
                    value: '{offer.prices.perWeek:currentCurrency}'
                }
            }, {
                label: '1 month',
                bind: {
                    value: '{offer.prices.perMonth:currentCurrency}'
                }
            }, {
                label: '1 month (3 months cotract)',
                bind: {
                    value: '{offer.prices.perMonth3m:currentCurrency}'
                }
            }, {
                label: '1 month (6 months contract)',
                bind: {
                    value: '{offer.prices.perMonth6m:currentCurrency}'
                }
            }, {
                label: '1 month (1 year contract)',
                bind: {
                    value: '{offer.prices.perMonth1y:currentCurrency}'
                }
            }]
        }]
    }]
})