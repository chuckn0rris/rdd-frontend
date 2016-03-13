/**
 * This view is an example list of people.
 */
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

    columns: [{
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
        text: 'Details',
        dataIndex: 'desc',
        flex: 1,
        renderer: function(val, meta, record) {
            var html = "<b>Model:</b>&nbsp;"+record.get('model')+"<br/>";
            html += "<b>Color:</b>&nbsp;"+record.get('color')+"<br/>";
            html += "<b>Year:</b>&nbsp;"+record.get('year')+"<br/>";
            return html;
        }
    }, {
        text: 'Available?',
        dataIndex: 'isAvailable',
        width: 100,
        renderer: function(val, meta) {
            return val ? '<div style="color: green;">Available</div>' : '<div style="color: red;">Not available</div>';
        }
    }, {
        xtype: 'widgetcolumn',
        text: 'Contacts',
        width: 150,
        widget: {
            xtype: 'button',
            width: 130,
            text: 'Show Contacts'
        },
        renderer: function(val, meta) {
            meta.tdCls = 'rdd-mainlist-column-contacts';
            return val;
        }
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
