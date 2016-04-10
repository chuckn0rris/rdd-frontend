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

    layout: 'vbox',

    items: [{
        xtype: 'fieldset',
        width: '100%',
        bind: {
            title: '<div><b>{offer.brand} {offer.model}</b>, {offer.year}, {offer.color} color</div>'
        },
        margin: '0 10 0 10',
        layout: 'hbox',
        items: [{
            xtype: 'panel',
            layout: 'vbox',
            width: 300,
            height: 300,
            margin: '0 10 10 10',
            border: true,
            items: [{
                xtype: 'container',
                width: '100%',
                height: 200,
                bind: {
                    html:   '<div align="center">' +
                                '<a href="{offer.photo.src}" data-lightbox="image-{offer.transportId}">' +
                                    '<img style="max-height: 200px; max-width: 300px; padding: 5px;" src="{offer.photo.src}"/>' +
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
                                    '<a href="{src}" data-lightbox="image-{transportId}">',
                                        '<img src="{src}">',
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
            layout: 'vbox',
            flex: 1,
            defaults: {
                xtype: 'infolabel',
                margin: '0 5',
                width: '100%'
            },
            items: [{
                label: 'Mileage',
                bind: {
                    value: '{offer.mileage:distance}'
                }
            }, {
                label: 'Saloon',
                hidden: true,
                bind: {
                    hidden: '{!offer.material}',
                    value: '{offer.material}'
                }
            }, {
                label: 'Complectation',
                hidden: true,
                bind: {
                    hidden: '{!offer.complectation}',
                    value: '{offer.complectation}'
                }
            }, {
                label: 'Horsepower',
                hidden: true,
                bind: {
                    hidden: '{!offer.horsepower}',
                    value: '{offer.horsepower}'
                }

            }, {
                xtype: 'fieldset',
                title: 'Description',
                layout: 'fit',
                margin: '0 10 0 10',
                hidden: true,
                bind: {
                    hidden: '{!offer.description}'
                },
                items: [{
                    xtype: 'container',
                    bind: {
                        html: '{offer.description}'
                    }
                }]
            }, {
                xtype: 'fieldset',
                title: 'Features',
                defaults: {
                    xtype: 'container',
                    layout: 'vbox',
                    defaults: {
                        xtype: 'checkbox',
                        readOnly: true
                    }
                },
                layout: 'column',
                width: '100%',
                margin: '0 10 0 10',
                items: [{
                    defaults: {
                        xtype: 'checkbox',
                        readOnly: true,
                        labelWidth: 60
                    },
                    columnWidth: 0.20,
                    items: [{
                        boxLabel: 'MP3',
                        bind: '{offer.meta.mp3}'
                    }, {
                        boxLabel: 'DVD',
                        bind: '{offer.meta.dvd}'
                    }, {
                        boxLabel: 'USB',
                        bind: '{offer.meta.usb}'
                    }]
                }, {
                    xtype: 'container',
                    columnWidth: 0.25,
                    layout: 'vbox',
                    items: [{
                        boxLabel: 'Diesel',
                        bind: '{offer.meta.diesel}'
                    }, {
                        boxLabel: 'Baby seat',
                        bind: '{offer.meta.babySeats}'
                    }]
                }, {
                    xtype: 'container',
                    columnWidth: 0.4,
                    layout: 'vbox',
                    defaults: {
                        xtype: 'checkbox',
                        readOnly: true,
                        labelWidth: 130
                    },
                    items: [{
                        boxLabel: 'Air condition',
                        bind: '{offer.meta.airCond}'
                    }, {
                        boxLabel: 'Auto transmissoin',
                        bind: '{offer.meta.autoTransmission}'
                    }, {
                        boxLabel: 'Signalisation',
                        bind: '{offer.meta.signalisation}'
                    }]
                }]
            }]
        }]
    }, {
        xtype: 'container',
        layout: 'hbox',
        width: '100%',
        items: [{
            xtype: 'fieldset',
            title: 'Availability',
            width: '100%',
            flex: 1,
            margin: '0 10 0 10',
            defaults: {
                xtype: 'infolabel',
                width: '100%'
            },
            items: [{
                xtype: 'label',
                bind: {
                    hidden: '{!offer.isAvailable}'
                },
                html: '<div style="color: green; margin-left: 5px;">Available right now!</div>'
            }, {
                label: 'Available From',
                bind: {
                    hidden: '{!offer.availableFrom}',
                    value: '{offer.availableFrom:date}'
                }
            }, {
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
            }, {
                label: 'Comments',
                bind: {
                    value: '{offer.prices.comments}'
                }
            }]
        }, {
            xtype: 'fieldset',
            title: 'Contacts',
            flex: 1,
            layout: 'vbox',
            margin: '0 10 10 0',
            defaults: {
                xtype: 'infoiconlabel',
                width: '100%'
            },
            items: [{
                xtype: 'label',
                margin: 5,
                bind: '<b>{offer.ownerUser.firstName} {offer.ownerUser.lastName}, {offer.ownerUser.company}</b>'
            }, {
                xtype: 'label',
                margin: 5,
                bind: '<b>District:</b> {offer.ownerUser.district}'
            }, {
                icon: 'classic/resources/images/phone.png',
                label: 'Phone',
                bind: {
                    value: '{offer.ownerUser.phone}'
                }
            }, {
                icon: 'classic/resources/images/mobile.png',
                label: 'Mobile',
                bind: {
                    value: '{offer.ownerUser.mobilePhone}'
                }
            }, {
                icon: 'classic/resources/images/email.png',
                label: 'Email',
                bind: {
                    value: '<a href="mailto:{offer.ownerUser.publicEmail}" target="_blank">{offer.ownerUser.publicEmail}</a>'
                }
            }, {
                style: 'margin-top: 15px',
                icon: 'classic/resources/images/whatsapp.png',
                label: 'Whatsapp',
                bind: {
                    value: '{offer.ownerUser.socialContacts.whatsapp}'
                }
            }, {
                icon: 'classic/resources/images/viber.png',
                label: 'Viber',
                bind: {
                    value: '{offer.ownerUser.socialContacts.viber}'
                }
            }, {
                icon: 'classic/resources/images/facebook.png',
                label: 'Facebook',
                bind: {
                    value: '<a href="{offer.ownerUser.socialContacts.facebook}" target="_blank">{offer.ownerUser.socialContacts.facebook}</a>'
                }
            }, {
                icon: 'classic/resources/images/skype.png',
                label: 'Skype',
                bind: {
                    value: '{offer.ownerUser.socialContacts.skype}'
                }
            }, {
                xtype: 'button',
                style: 'margin-top: 15px',
                text: 'Show Owner Card',
                width: 200,
                handler: 'showOwnerProfile'
            }]
        }]
    }]
})