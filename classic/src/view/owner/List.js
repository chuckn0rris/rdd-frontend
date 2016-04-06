Ext.define('Rdd.view.owner.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'transportlist',

    requires: [
        'Rdd.store.Transports',
        'Ext.toolbar.Paging',
        'Rdd.view.owner.ListController',
        'Ext.grid.column.RowNumberer'
    ],

    controller: 'transportlist',

    store: {
        type: 'transports'
    },

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: {
            type: 'transports'
        },
        dock: 'bottom',
        displayInfo: true
    }],

    columns: {
        defaults: {
            resizable: false,
            sortable: false,
            menuDisabled: true
        },
        items: [{
            text: '#',
            width: 40,
            renderer: function(val, meta) {
                return meta.rowIndex + 1;
            }
        }, {
            text: 'Photo',
            dataIndex: 'photos',
            width: 200,
            renderer: function(val, meta, record) {
                meta.style = 'height: 160px;'
                if (val && val.length) {
                    var html = Ext.String.format('<div align="center"> <img style="max-height: 160px; max-width: 160px;" src="{0}"/></div><a style="padding-left: 10px;"', val[0].src);
                    return html;
                } else {
                    return '';
                }
            }
        }, {
            text: 'Car Details',
            dataIndex: 'desc',
            width: 300,
            renderer: function(val, meta, record) {
                var model = record.get('brand')+' '+record.get('model'),
                    owner = record.get('firstName')+' '+record.get('lastName');

                var html = Ext.String.format("<b>{0}, {1}</b>&nbsp;&nbsp;", model, record.get('year'));
                html += Ext.String.format('{0} color</br>', record.get('color'));
                if (record.get('mileage')) {
                    html += Ext.String.format("<b>{0}:</b>&nbsp;{1}</br>", 'Mileage', Ext.util.Format.distance(record.get('mileage')));
                }

                html += "</br>";
                html += Utils.renderer.renderIsAvailableHtml(record);
                return html;
            }
        },{
            text: 'Prices',
            dataIndex: 'prices',
            flex: 1,
            renderer: Utils.renderer.renderPrices
        }, {
            xtype: 'widgetcolumn',
            text: '',
            width: 150,
            widget: {
                xtype: 'button',
                width: 130,
                text: 'Show Details',
                handler: 'openOffer'
            },
            hidden: true,
            bind: {
                hidden: '{isOwnPage}'
            },
            renderer: function(val, meta) {
                meta.tdCls = 'rdd-mainlist-column-contacts';
                return val;
            }
        }, {
            xtype: 'actioncolumn',
            text: '#',
            width: 80,
            hidden: true,
            bind: {
                hidden: '{!isOwnPage}'
            },
            cls: 'rdd-owner-list-actioncolumn',
            align: 'center',
            items: [{
                icon: 'classic/resources/images/edit.png',
                tooltip: 'Edit',
                iconCls: 'rdd-owner-list-actionicon',
                handler: 'editTransport'
            }, {
                icon: 'classic/resources/images/delete.png',
                iconCls: 'rdd-owner-list-actionicon',
                tooltip: 'Remove',
                handler: 'removeTransport'
            }]
        }]
    }
});