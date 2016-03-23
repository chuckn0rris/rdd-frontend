Ext.define('Rdd.model.Owner', {
    extend: 'Ext.data.Model',
    alias: 'model.owner',

    // TODO: setup proxy to load owner data from the server
    // proxy: {

    // },

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