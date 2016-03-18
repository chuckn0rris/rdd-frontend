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

    border: true,

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
                    var html = Ext.String.format('<div align="center"> <img style="max-height: 160px; max-width: 160px;" src="{0}"/></div><a style="padding-left: 10px;"', val);
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
                    model = record.get('brand')+' '+record.get('model'),
                    owner = record.get('firstName')+' '+record.get('lastName');

                var html = Ext.String.format("<b>{0}, {1}</b>&nbsp;&nbsp;", model, record.get('year'));
                html += Ext.String.format('{0} color</br>', record.get('color'));
                if (record.get('mileage')) {
                    html += Ext.String.format("<b>{0}:</b>&nbsp;{1}</br>", 'Mileage', Ext.util.Format.distance(record.get('mileage')));
                }
                html += Ext.String.format(htmlTpl, 'District', record.get('district'));
                html += Ext.String.format("<b>Owner:</b>&nbsp;{0}, {1}</br>", owner, record.get('company'));

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
                var htmlTpl = "<b>{0}:</b>&nbsp;{1}</br>",
                    getString = function(title, val) {
                        return Ext.String.format("<b>{0}:</b>&nbsp;{1}</br>", title, Ext.util.Format.currentCurrency(val));
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
