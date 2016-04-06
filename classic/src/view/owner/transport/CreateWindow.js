Ext.define('Rdd.view.owner.transport.CreateWindow', {
    extend: 'Ext.window.Window',
    xtype: 'createtransport',

    controller: 'owner',

    title: 'Add new record',
    modal: true,
    width: 500,
    layout: 'fit',
    resizable: false,
    layout: 'vbox',

    items: [{
        xtype: 'form',
        width: '100%',
        defaults: {
            xtype: 'textfield',
            padding: '0 10',
            labelWidth: 70,
            anchor: '100%',
            allowBlank: false
        },
        items: [{
            xtype: 'radiogroup',
            layout: 'hbox',
            value: {
                atype: 'auto'
            },
            fieldLabel: 'Type',
            items: [{
                xtype: 'radio',
                boxLabel: 'Auto',
                name: 'atype',
                style: 'padding-right: 10px;',
                inputValue: 'auto'
            }, {
                xtype: 'radio',
                boxLabel: 'Moto',
                name: 'atype',
                inputValue: 'moto'
            }]
        }, {
            xtype: 'combobox',
            fieldLabel: 'Brand',
            queryMode: 'local',
            name: 'brand',
            store: {
                type: 'brands'
            },
            valueField: 'name',
            displayField: 'name'
        }, {
            fieldLabel: 'Model',
            name: 'model'
        }, {
            fieldLabel: 'Color',
            name: 'color'
        }],
        buttons: [{
            text: 'Save',
            width: 100,
            formBind: true,
            handler: 'addTransportRecord'
        }, {
            text: 'Close',
            width: 100,
            handler: 'closeWindow'
        }]
    }]
});