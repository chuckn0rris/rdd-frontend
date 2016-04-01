Ext.define('Rdd.view.ux.overrides.Format', {
    override: 'Ext.util.Format',
    currentCurrency: function(value) {
        return Ext.String.format('{0}฿', Ext.util.Format.number(value, '0,000'));
    },

    distance: function(value) {
        return Ext.String.format('{0}km', Ext.util.Format.number(value, '0,000'));
    },

    date: function(value) {
        return value ? Ext.Date.format(new Date("2016-03-26T16:28:51Z"), 'm/d/Y') : '-';
    }
});