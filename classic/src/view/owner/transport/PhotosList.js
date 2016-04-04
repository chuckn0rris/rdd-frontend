Ext.define('Rdd.view.owner.transport.PhotosList', {
    extend: 'Ext.grid.Panel',
    xtype: 'photosgrid',

    controller: 'owner',
    viewModel: {
        type: 'transport'
    },

    store: {
        fields: ['id', 'src']
    },

    hideHeaders: true,
    emptyText: '<div style="padding: 20px;"><center>No photos attached</center></div>',
    columns: {
        defaults: {
            resizable: false,
            sortable: false,
            menuDisabled: true
        },
        items: [{
            dataIndex: 'src',
            width: 340,
            renderer: function(val, meta, record) {
                meta.style = 'height: 250px;';
                if (val) {
                    var html = Ext.String.format('<div align="center"> <img style="max-height: 255px; max-width: 330px;" src="{0}"/></div><a style="padding-left: 10px;"', val);
                    return html;
                } else {
                    return '';
                }
            }
        }, {
            xtype: 'actioncolumn',
            width: 40,
            cls: 'rdd-owner-list-actioncolumn',
            align: 'center',
            items: [{
                icon: 'classic/resources/images/delete.png',
                iconCls: 'rdd-owner-list-actionicon',
                tooltip: 'Remove',
                handler: 'removeTransportPhoto'
            }]
        }]
    }
});