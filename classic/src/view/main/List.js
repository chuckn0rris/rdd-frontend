Ext.define('Rdd.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Rdd.store.Offers'
    ],

    bind: {
        title: '{i18n.listTitle}'
    },

    store: {
        type: 'offers'
    },

    columns: {
        defaults: {
            resizable: false,
            sortable: false,
            menuDisabled: true
        },
        items: [{
            text: 'Photo',
            dataIndex: 'photo',
            width: 200,
            renderer: function(val, meta, record) {
                meta.style = 'height: 160px;'
                if (val) {
                    var html = Ext.String.format('<div align="center"> <img style="max-height: 160px; max-width: 160px;" src="{0}"/></div>', val);
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
                var htmlTpl = "<b>{0}:</b>&nbsp;{1}</br>",
                    model = record.get('brand')+' '+record.get('model');

                var html = Ext.String.format(htmlTpl, 'Model', model);
                html += Ext.String.format(htmlTpl, 'Color', record.get('color'));
                html += Ext.String.format(htmlTpl, 'Year', record.get('year'));
                html += Ext.String.format(htmlTpl, 'Mileage', record.get('mileage') || "(no info)");
                return html;
            }
        }, {
            text: 'Owner Details',
            width: 300,
            renderer: function(val, meta, record) {
                var htmlTpl = "<b>{0}:</b>&nbsp;{1}</br>",
                    owner = record.get('firstName')+' '+record.get('lastName'),
                    company = record.get('company');

                var html = Ext.String.format(htmlTpl, 'Owner', owner);
                if (company) {
                    html += Ext.String.format(htmlTpl, 'Company', company);
                }
                html += Ext.String.format(htmlTpl, 'District', record.get('district'));
                return html;
            }
        }, {
            text: 'Available?',
            dataIndex: 'isAvailable',
            width: 100,
            renderer: function(val, meta) {
                return val ? '<div style="color: green;">Available</div>' : '<div style="color: red;">Not available</div>';
            }
        },{
            text: 'Prices',
            dataIndex: 'prices',
            flex: 1,
            renderer: function(val, meta, record) {
                var htmlTpl = "<b>{0}:</b>&nbsp;{1}</br>",
                    html = '';

                html += Ext.String.format(htmlTpl, '1 day', val.perDay);
                if (val.perWeek) {
                    html += Ext.String.format(htmlTpl, '1 week', val.perWeek);
                }
                if (val.perMonth) {
                    html += Ext.String.format(htmlTpl, '1 month', val.perMonth);
                }
                if (val.perMonth3m) {
                    html += Ext.String.format(htmlTpl, '1 month (3 months cotract)', val.perMonth3m);
                }
                if (val.perMonth6m) {
                    html += Ext.String.format(htmlTpl, '1 month (6 months cotract)', val.perMonth6m);
                }
                if (val.perMonth1y) {
                    html += Ext.String.format(htmlTpl, '1 month (1 year cotract)', val.perMonth1y);
                }
                if (val.comment) {
                    html += Ext.String.format(htmlTpl, 'Comments', val.comment);
                }

                return html;

            }
        }, {
            xtype: 'widgetcolumn',
            text: 'Contacts',
            width: 150,
            widget: {
                xtype: 'button',
                width: 130,
                text: 'Show Contacts',
                handler: 'openTransportDetails'
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
