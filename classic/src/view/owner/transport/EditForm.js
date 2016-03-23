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
            margin: 10
        }, {
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
                name: 'complectation',
                bind: '{complectation}',
                emptyText: 'Code of complectation'
            }, {
                xtype: 'checkbox',
                fieldLabel: 'Diesel',
                value: false,
                name: 'diesel',
                bind: '{diesel}'
            }]
        }]
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