Ext.define('Rdd.store.Offers', {
    extend: 'Ext.data.Store',

    alias: 'store.offers',

    requires: [
        'Rdd.model.Offer'
    ],

    model: 'Rdd.model.Offer',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: Urls.get('offers'),
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
