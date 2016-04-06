Ext.define('Rdd.view.ux.overrides.Format', {
    override: 'Ext.util.Format',
    currentCurrency: function(value) {
        return Ext.String.format(Utils.format.currency, Ext.util.Format.number(value, '0,000'));
    },

    distance: function(value) {
        return Ext.String.format(Utils.format.mileage, Ext.util.Format.number(value, '0,000'));
    },

    date: function(value) {
        return value ? Ext.Date.format(new Date(value), Utils.format.date) : '-';
    }
});