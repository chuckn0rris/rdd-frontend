Ext.define('Rdd.view.owner.transport.EditForm', {
    extend: 'Ext.form.Panel',
    xtype: 'edittransport',

    requires: [
        'Rdd.view.owner.transport.PhotosList',
        'Rdd.view.owner.transport.TransportModel'
    ],

    controller: 'owner',
    // TODO: create transport model and viewmodel?
    viewModel: {
        type: 'transport'
    },

    bind: {
        title: '{brand} {model}'
    },

    layout: 'vbox',

    items: [{
        xtype: 'container',
        width: '100%',
        layout: 'hbox',
        items: [{
            xtype: 'photosgrid',
            bind: '{photos}',
            height: 400,
            width: 400,
            border: true,
            margin: '10 10 0 10',
            bbar: [{
                xtype: 'label',
                width: '100%',
                html: '<center><i>First photo will be used as main.</i></center>'
            }]
        }, {
            xtype: 'container',
            layout: 'vbox',
            flex: 1,
            items: [{
                xtype: 'container',
                layout: 'hbox',
                width: '100%',
                items: [{
                    xtype: 'container',
                    layout: 'form',
                    flex: 1,
                    defaults: {
                        xtype: 'textfield',
                        width: '100%',
                        allowBlank: false
                    },
                    items: [{
                        xtype: 'radiogroup',
                        layout: 'hbox',
                        bind: {
                            value: {
                                type: '{type}'
                            }
                        },
                        fieldLabel: '',
                        items: [{
                            xtype: 'radio',
                            boxLabel: 'Auto',
                            name: 'type',
                            style: 'padding-right: 10px;',
                            inputValue: 'auto'
                        }, {
                            xtype: 'radio',
                            boxLabel: 'Moto',
                            name: 'type',
                            inputValue: 'moto'
                        }]
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Brand',
                        emptyText: 'Required',
                        store: {
                            type: 'brands'
                        },
                        valueField: 'id',
                        displayField: 'name',
                        bind: '{brand}'
                    }, {
                        fieldLabel: 'Model',
                        name: 'model',
                        emptyText: 'Required',
                        bind: '{model}'
                    }, {
                        fieldLabel: 'Color',
                        emptyText: '(ex. Yellow)',
                        name: 'color',
                        bind: '{color}'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: 'Year',
                        emptyText: 'European format (ex. 2016)',
                        name: 'year',
                        bind: '{year}',
                        minValue: 1901,
                        maxValue: parseInt(Ext.Date.format(new Date(), 'Y')),
                        allowDecimals: false
                    }]
                }, {
                    xtype: 'container',
                    layout: 'form',
                    flex: 1,
                    margin: '0 10 0 0',
                    style: 'padding-top: 40px;',
                    defaults: {
                        xtype: 'textfield',
                        width: '100%',
                        allowBlank: false
                    },
                    items: [{
                        xtype: 'numberfield',
                        fieldLabel: 'Mileage',
                        minValue: 100,
                        step: 1000,
                        emptyText: 'approx. allowed',
                        maxValue: 1000000,
                        allowDecimals: false,
                        name: 'mileage',
                        bind: '{mileage}'
                    }, {
                        fieldLabel: 'Seats material',
                        emptyText: '(ex. Leather)',
                        name: 'material',
                        bind: '{material}'
                    }, {
                        fieldLabel: 'Complectation',
                        allowBlank: true,
                        name: 'complectation',
                        bind: '{complectation}',
                        emptyText: 'Code of complectation'
                    }, {
                        fieldLabel: 'Horsepower',
                        emptyText: 'Not required',
                        allowBlank: true,
                        name: 'horsePower',
                        bind: '{horsePower}'
                    }]
                }]
            }, {
                xtype: 'fieldset',
                title: 'Features',
                layout: 'column',
                width: '100%',
                margin: '0 10 0 10',
                items: [{
                    xtype: 'container',
                    columnWidth: 0.15,
                    layout: 'vbox',
                    items: [{
                        xtype: 'checkbox',
                        boxLabel: 'MP3',
                        name: 'mp3',
                        bind: '{mp3}'
                    }, {
                        xtype: 'checkbox',
                        boxLabel: 'DVD',
                        name: 'dvd',
                        bind: '{dvd}'
                    }, {
                        xtype: 'checkbox',
                        boxLabel: 'USB',
                        name: 'usb',
                        bind: '{usb}'
                    }]
                }, {
                    xtype: 'container',
                    columnWidth: 0.3,
                    layout: 'vbox',
                    items: [{
                        xtype: 'checkbox',
                        boxLabel: 'Air condition',
                        name: 'airCond',
                        bind: '{airCond}'
                    }, {
                        xtype: 'checkbox',
                        boxLabel: 'Auto transmissoin',
                        name: 'airCond',
                        bind: '{airCond}'
                    }, {
                        xtype: 'checkbox',
                        boxLabel: 'Signalisation',
                        name: 'signalisation',
                        bind: '{signalisation}'
                    }]
                }, {
                    xtype: 'container',
                    columnWidth: 0.3,
                    layout: 'vbox',
                    items: [{
                        xtype: 'checkbox',
                        boxLabel: 'Diesel',
                        name: 'diesel',
                        bind: '{diesel}'
                    }, {
                        xtype: 'checkbox',
                        boxLabel: 'Baby seat',
                        name: 'babySeats',
                        bind: '{babySeats}'
                    // }, {
                    //     xtype: 'checkbox',
                    //     boxLabel: 'Signalisation',
                    //     name: 'signalisation',
                    //     bind: '{signalisation}'
                    }]
                }]
            }]
        }]
    }, {
        xtype: 'container',
        layout: 'hbox',
        width: '100%',
        items: [{
            xtype: 'container',
            layout: 'vbox',
            width: 400,
            margin: '0 10 0 10',
            items: [{
                xtype: 'textarea',
                fieldLabel: 'Details',
                emptyText: 'Please, describe all that you want to say about this item of transport.',
                width: '100%',
                height: 120,
                labelAlign: 'top'
            }, {
                xtype: 'radiogroup',
                layout: 'vbox',
                bind: {
                    value: {
                        isAvailable: '{isAvailable}'
                    }
                },
                items: [{
                    xtype: 'radio',
                    boxLabel: 'Available Now',
                    name: 'isAvailable',
                    style: 'padding-right: 10px;',
                    inputValue: true
                }, {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [{
                        xtype: 'radio',
                        boxLabel: 'Available From',
                        name: 'isAvailable',
                        style: 'padding-right: 5px;',
                        inputValue: false
                    }, {
                        xtype: 'datefield',
                        name: 'availableFrom',
                        bind: {
                            value: '{availableFrom}'
                            // TODO: don't works, I don't know the reason
                            // disabled: '{isAvailable}'
                        }
                    }]
                }]
            }]
        }, {
            xtype: 'fieldset',
            title: 'Prices',
            layout: 'vbox',
            flex: 1,
            margin: '0 10 10 0',
            items: [{
                xtype: 'container',
                layout: 'column',
                width: '100%',
                items: [{
                    xtype: 'container',
                    columnWidth: 0.4,
                    defaults: {
                        xtype: 'numberfield',
                        width: '100%',
                        labelWidth: 70,
                        minValue: 0,
                        step: 100,
                        allowBlank: false,
                        emptyText: 'Price in THB'
                    },
                    items: [{
                        fieldLabel: '1 day',
                        bind: '{prices.perDay}'
                    }, {
                        fieldLabel: '1 week',
                        bind: '{prices.perWeek}'
                    }, {
                        fieldLabel: '1 month',
                        bind: '{prices.perMonth}'
                    }]
                }, {
                    xtype: 'container',
                    columnWidth: 0.6,
                    style: 'padding-left: 5px;',
                    defaults: {
                        xtype: 'numberfield',
                        width: '100%',
                        labelWidth: 150,
                        minValue: 0,
                        step: 100,
                        emptyText: 'Price in THB'
                    },
                    items: [{
                        fieldLabel: '1m (3 months contract)',
                        bind: '{prices.perMonth3m}'
                    }, {
                        fieldLabel: '1m (6 months contract)',
                        bind: '{prices.perMonth6m}'
                    }, {
                        fieldLabel: '1m (1 year contract)',
                        bind: '{prices.perMonth1y}'
                    }]
                }]
            }, {
                xtype: 'textarea',
                fieldLabel: 'Comments',
                emptyText: 'Any comments about discounts, extra rules, deposits, etc.',
                width: '100%',
                height: 120,
                labelAlign: 'top'
            }]
        }]
    }, {
        xtype: 'checkbox',
        margin: '20 10 10 10',
        value: false,
        bind: '{publicAccess}',
        boxLabel: 'Open public access (available only after all required field was filled)'
    }],

    buttons: [{
        text: 'Save',
        width: 100,
        handler: 'saveProfileChanges'
    }, {
        text: 'Close',
        width: 100,
        handler: 'closeProfileWindow'
    }]
});