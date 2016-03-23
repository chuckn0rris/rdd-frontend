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
                // value: {
                //     type: 'auto'
                // },
                fieldLabel: 'Type',
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
                store: {
                    type: 'brands'
                },
                valueField: 'id',
                displayField: 'name',
                bind: '{brand}'
            }, {
                fieldLabel: 'Model',
                name: 'model',
                bind: '{model}'
            }, {
                fieldLabel: 'Color',
                name: 'color',
                bind: '{color}'
            }, {
                xtype: 'numberfield',
                minValue: 100,
                step: 1000,
                maxValue: 1000000,
                allowDecimals: false,
                fieldLabel: 'Mileage',
                name: 'mileage',
                bind: '{mileage}'
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