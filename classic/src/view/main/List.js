Ext.define('Rdd.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Rdd.store.Offers',
        'Ext.toolbar.Paging',
        'Ext.grid.column.RowNumberer'
    ],

    store: {
        type: 'offers'
    },

    border: true,

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: {
            type: 'offers'
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
                var photo = val[0];
                if (photo) {
                    var html = Ext.String.format('<div align="center"> <img style="max-height: 160px; max-width: 160px;" src="{0}"/></div><a style="padding-left: 10px;"', photo.src);
                    return html;
                } else {
                    return '<center style="padding-top: 15px;">No photo</center>';
                }
            }
        }, {
            text: 'Car Details',
            dataIndex: 'desc',
            width: 300,
            renderer: function(val, meta, record) {
                var model = record.get('brand')+' '+record.get('model'),
                    owner = record.get('ownerUser'),
                    fullName = owner.firstName + ' ' + owner.lastName;

                var html = Ext.String.format("<b>{0}, {1}</b>&nbsp;&nbsp;", model, record.get('year'));
                html += Ext.String.format('{0} color</br>', record.get('color'));
                if (record.get('mileage')) {
                    html += Ext.String.format("<b>{0}:</b>&nbsp;{1}</br>", 'Mileage', Ext.util.Format.distance(record.get('mileage')));
                }
                html += Ext.String.format("<b>{0}:</b>&nbsp;{1}</br>", 'District', record.get('district'));
                html += Ext.String.format("<b>Owner:</b>&nbsp;{0}, {1}</br>", fullName, owner.company);

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
            renderer: function(val, meta) {
                meta.tdCls = 'rdd-mainlist-column-contacts';
                return val;
            }
        }]
    },

    listeners: {
        select: 'onItemSelected'
    }
});
