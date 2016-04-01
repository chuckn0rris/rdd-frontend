Ext.define('Rdd.store.Transports', {
    extend: 'Ext.data.Store',

    alias: 'store.transports',

    requires: [
        'Rdd.model.Transport'
    ],

    model: 'Rdd.model.Transport',

    proxy: {
        type: 'ajax',
        url: Urls.get('transports'),
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'count'
        }
    }
});