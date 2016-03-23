Ext.define('Rdd.store.Brands', {
    extend: 'Ext.data.Store',

    alias: 'store.brands',


    fields: ['id', 'name', 'type'],

    // TODO: get the list from the server!
    data: [{
        id: 'toyota',
        name: 'Toyota'
    }, {
        id: 'honda',
        name: 'Honda'
    }, {
        id: 'mazda',
        name: 'Mazda'
    }, {
        id: 'subaru',
        name: 'Subaru'
    }, {
        id: 'lexus',
        name: 'Lexus'
    }, {
        id: 'isuzu',
        name: 'Isuzu'
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
