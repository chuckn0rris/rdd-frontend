Ext.define('Rdd.view.main.Filters', {
    extend: 'Ext.form.Panel',
    xtype: 'filterspanel',

    layout: 'hbox',
    controller: 'main',

    items: [{
        xtype: 'fieldset',
        title: 'Type',
        margin: 3,
        width: 110,
        layout: 'vbox',
        defaults: {
            anchor: '100%'
        },
        items: [{
            xtype: 'checkbox',
            value: true,
            inputValue: true,
            boxLabel: 'Auto',
            name: 'auto'
        }, {
            xtype: 'checkbox',
            value: true,
            inputValue: true,
            boxLabel: 'Moto',
            name: 'moto'
        }]
    }, {
        xtype: 'fieldset',
        title: 'Model',
        margin: 3,
        width: 250,
        layout: 'vbox',
        defaults: {
            hideLabel: true,
            width: '100%'
        },
        items: [{
            xtype: 'combo',
            emptyText: 'Brand',
            name: 'brand',
            store: {
                type: 'brands'
            },
            valueField: 'name',
            displayField: 'name'
        }, {
            xtype: 'textfield',
            emptyText: 'Model',
            name: 'model'
        }]
    }, {
        xtype: 'fieldset',
        title: 'Price',
        margin: 3,
        width: 350,
        layout: 'vbox',
        defaults: {
            hideLabel: true,
            width: '100%'
        },
        items: [{
            xtype: 'combo',
            emptyText: 'Period',
            name: 'period',
            store: {
                fields: ['id', 'name'],
                data: [{
                    id: 'day',
                    name: '1 day'
                }, {
                    id: 'week',
                    name: '1 week'
                }, {
                    id: 'month',
                    name: '1 month'
                }]
            },
            valueField: 'id',
            displayField: 'name'
        }, {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            defaults: {
                hideLabel: 'true'
            },
            items: [{
                xtype: 'checkbox',
                style: 'padding-left: 6px;',
                value: false,
                inputValue: true,
                width: 30,
                reference: 'allowPriceFrom'
            }, {
                xtype: 'numberfield',
                flex: 1,
                name: 'priceFrom',
                emptyText: 'From',
                minValue: 1,
                allowDecimals: false,
                bind: {
                    disabled: '{!allowPriceFrom.checked}'
                }
            }, {
                xtype: 'checkbox',
                style: 'padding-left: 6px;',
                width: 30,
                value: false,
                inputValue: true,
                reference: 'allowPriceTo'
            }, {
                xtype: 'numberfield',
                flex: 1,
                name: 'priceTo',
                emptyText: 'To',
                minValue: 1,
                allowDecimals: false,
                bind: {
                    disabled: '{!allowPriceTo.checked}'
                }
            }]
        }]
    }, {
        xtype: 'fieldset',
        title: 'Location',
        margin: 3,
        width: 250,
        layout: 'vbox',
        defaults: {
            hideLabel: true,
            width: '100%'
        },
        items: [{
            xtype: 'combo',
            emptyText: 'City',
            name: 'city',
            store: {
                type: 'locations'
            },
            value: 'Phuket',
            valueField: 'name',
            displayField: 'name'
        }, {
            xtype: 'textfield',
            emptyText: 'District',
            name: 'district'
        }]
    }],
    bbar: [{
        xtype: 'fieldcontainer',
        layout: 'hbox',
        defaults: {
            hideLabel: 'true'
        },
        items: [{
            xtype: 'checkbox',
            style: 'padding-left: 6px;',
            width: 30,
            value: false,
            inputValue: true,
            reference: 'allowDateFrom'
        }, {
            xtype: 'datefield',
            flex: 1,
            name: 'dateFrom',
            emptyText: 'Date from',
            bind: {
                disabled: '{!allowDateFrom.checked}'
            }
        }, {
            xtype: 'checkbox',
            style: 'padding-left: 6px;',
            width: 30,
            value: false,
            inputValue: true,
            reference: 'allowDateTo'
        }, {
            xtype: 'datefield',
            flex: 1,
            name: 'dateTo',
            emptyText: 'Date to',
            minValue: 1,
            allowDecimals: false,
            bind: {
                disabled: '{!allowDateTo.checked}'
            }
        }]
    }, '->',{
        xtype: 'checkbox',
        style: 'padding-left: 6px;',
        inputValue: true,
        name: 'longTermRent',
        boxLabel: 'Available for long term only'
    }, '-', {
        text: 'Clear',
        width: 100,
        handler: 'resetFilters'
    }, {
        text: 'Find',
        width: 100,
        handler: 'applyFilters'
    }]
});
