Ext.define('Rdd.model.Owner', {
    extend: 'Ext.data.Model',
    alias: 'model.owner',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    proxy: {
        type: 'rest',
        url: Urls.get('getowner'),
        reader: {
            rootProperty: ''
        }
    },

    fields: [
        'id',
        'firstName',
        'lastName',
        'company',
        'district',
        'mapCoordinates',
        'socialContacts',
        'avatar',
        'type',
        'publicEmail',
        'mobilePhone',
        'phone',
        'link',
        'country',
        'city'
    ]
});