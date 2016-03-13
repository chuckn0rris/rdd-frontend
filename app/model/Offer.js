Ext.define('Rdd.model.Offer', {
    extend: 'Ext.data.Model',
    alias: 'model.offer',

    fields: [
        'id',
        'ownerId',
        'photo',
        'model',
        'color',
        'year',
        'isAvailable',
        'desc'
    ]
});