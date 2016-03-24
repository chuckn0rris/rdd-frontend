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
        {
            name: 'availableFrom',
            type: 'date'
        },
        'material',
        'complectation',
        'horsePower',
        'mileage',
        'mp3',
        'dvd',
        'usb',
        'airCond',
        'signalisation',
        'diesel',
        'babySeats',
        'desc',
        'prices'
    ]
});