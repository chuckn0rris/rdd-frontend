Ext.define('Rdd.store.Brands', {
    extend: 'Ext.data.Store',

    alias: 'store.brands',

    fields: ['id', 'name', 'type'],

    // TODO: get the list from the server!
    data: [{
        name: 'Audi'
    }, {
        name: 'BMW'
    }, {
        name: 'Mercedes'
    }, {
        name: 'Yamaha'
    }, {
        name: 'Honda'
    }, {
        name: 'Mazda'
    }, {
        name: 'Subaru'
    }, {
        name: 'Lexus'
    }, {
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
