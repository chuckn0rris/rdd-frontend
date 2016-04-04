Ext.define('Rdd.store.Transports', {
    extend: 'Ext.data.Store',

    alias: 'store.transports',

    requires: [
        'Rdd.model.Transport'
    ],

    model: 'Rdd.model.Transport',

    proxy: {
        type: 'ajax',
        url: null, // will be defined after owner model load
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'count'
        }
    }
});