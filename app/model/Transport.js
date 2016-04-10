Ext.define('Rdd.model.Transport', {
    extend: 'Ext.data.Model',
    alias: 'model.transport',

    fields: [
        'id',
        'type',
        'photo',
        'photos',
        'brand',
        'model',
        'color',
        'year',
        'isAvailable',
        'isActive',
        'mileage',
        {
            name: 'availableFrom',
            type: 'date'
        },
        'meta',
        'description',
        'prices',
        'owner'
    ]
});