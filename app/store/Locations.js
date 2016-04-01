Ext.define('Rdd.store.Locations', {
    extend: 'Ext.data.Store',

    alias: 'store.locations',

    fields: ['name'],

    // TODO: get the list from the server!
    data: [{
        name: 'Bangkok'
    }, {
        name: 'Pattaya'
    }, {
        name: 'Phuket'
    }, {
        name: 'Krabi'
    }],

    proxy: {
        // type: 'ajax',
        type: 'memory',
        url: 'offers',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
