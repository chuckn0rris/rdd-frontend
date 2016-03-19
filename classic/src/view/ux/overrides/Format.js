Ext.define('Rdd.view.ux.overrides.Format', {
    override: 'Ext.util.Format',
    currentCurrency: function(value) {
        return Ext.String.format('{0}฿', Ext.util.Format.number(value, '0,000'));
    },

    distance: function(value) {
        return Ext.String.format('{0}km', Ext.util.Format.number(value, '0,000'));
    }
});