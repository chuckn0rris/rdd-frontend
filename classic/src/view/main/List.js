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
                if (record.get('isAvailable')) {
                    html += "<span style='color: green'>Available right now!</span>";
                } else if (record.get('availableFrom')) {
                    html += Ext.String.format("<b>Available from:</b>&nbsp;{0}</br>", record.get('availableFrom'));
                }
                return html;
            }
        },{
            text: 'Prices',
            dataIndex: 'prices',
            flex: 1,
            renderer: function(val, meta, record) {
                if (!val) {
                    return 'No information';
                }

                var getString = function(title, val) {
                        var htmlTpl = "<b>{0}:</b>&nbsp;{1}</br>";
                        return Ext.String.format(htmlTpl, title, Ext.util.Format.currentCurrency(val));
                    }
                    html = '';

                html += getString('1 day', val.perDay);
                if (val.perWeek) {
                    html += getString('1 week', val.perWeek);
                }
                if (val.perMonth) {
                    html += getString('1 month', val.perMonth);
                }
                if (val.perMonth3m) {
                    html += getString('1 month (3 months cotract)', val.perMonth3m);
                }
                if (val.perMonth6m) {
                    html += getString('1 month (6 months cotract)', val.perMonth6m);
                }
                if (val.perMonth1y) {
                    html += getString('1 month (1 year contract)', val.perMonth1y);
                }
                if (val.comment) {
                    html += getString('Comments', val.comment);
                }

                return html;

            }
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
