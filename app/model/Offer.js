Ext.define('Rdd.model.Offer', {
    extend: 'Ext.data.Model',
    alias: 'model.offer',

    fields: [
        'id',
        'ownerId',
        'firstName',
        'lastName',
        'company',
        'district',
        'mapCoordinates',
        'type',
        'photo',
        'brand',
        'model',
        'color',
        'year',
        'isAvailable',
        'desc',
        'prices'
    ]
});