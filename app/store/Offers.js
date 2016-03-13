Ext.define('Rdd.store.Offers', {
    extend: 'Ext.data.Store',

    alias: 'store.offers',

    requires: [
        'Rdd.model.Offer'
    ],

    model: 'Rdd.model.Offer',

    data: { items: [
        {id: 1, color: 'Red', year: '2010', photo: 'http://autosearchmanila.com/auto-search/uploads/public/models/43/2015%5C01%20Toyota-Vios-2013-2.jpg', model: "Toyota Vios", isAvailable: true, desc: '', ownerId: 1 },
        {id: 2, color: 'White', year: '2009', photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Honda_Accord_(2008)_front.JPG', model: "Honda Accord", isAvailable: true, desc: '', ownerId: 1 },
        {id: 3, color: 'White', year: '2010', photo: 'http://www.siaminside.com/wp-content/uploads/2014/11/Honda-Grace-Honda-City-Hybrid-01.jpg', model: "Honda City", isAvailable: true, desc: '', ownerId: 1 },
        {id: 4, color: 'White', year: '2012', photo: 'http://www.carblogindia.com/wp-content/uploads/2015/01/toyota-fortuner-2.5-trd-sportivo-front.jpg', model: "Toyota Fortuner", isAvailable: true, desc: '', ownerId: 1 },
        {id: 5, color: 'Yellow', year: '2014', photo: 'http://avto-survey.ru/wp-content/uploads/2015/09/ford-focus-08.jpg', model: "Ford Focus", isAvailable: true, desc: '', ownerId: 1 }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
