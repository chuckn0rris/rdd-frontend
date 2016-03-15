Ext.define('Rdd.store.Offers', {
    extend: 'Ext.data.Store',

    alias: 'store.offers',

    requires: [
        'Rdd.model.Offer'
    ],

    model: 'Rdd.model.Offer',

    data: { items: [
        {
            id: 1,
            type: 'auto',
            brand: 'Toyota',
            model: "Vios",
            ownerId: 1,
            company: 'Andaman Cars',
            firstName: 'Somchai',
            lastName: 'Uluwatu',
            color: 'Red',
            year: '2010',
            district: 'Chalong',
            mileage: 120000,
            photo: 'http://autosearchmanila.com/auto-search/uploads/public/models/43/2015%5C01%20Toyota-Vios-2013-2.jpg',
            isAvailable: true,
            prices: {
                perDay: 900,
                perWeek: 5000,
                perMonth: 17000,
                perMonth3m: 16000,
                perMonth6m: 15000,
                perMonth1y: 14000
            },
            desc: 'Leather saloon, very new',
            phone: '(+66)9-17-10-16-20',
            mobilePhone: '0917101620',
            publicEmail: 'getcar@andamancars.com',
            socialContacts: {
                viber: '(+66)9-17-10-16-20',
                skype: 'somchay003322',
                whatsapp: '(+66)9-17-10-16-20',
                facebook: 'http://facebook.com/somchai_uluwatu',
                line: '(+66)9-17-10-16-20'
            }
        }, {
            id: 2,
            type: 'auto',
            brand: 'Honda',
            model: "Accord",
            ownerId: 1,
            company: 'Andaman Cars',
            firstName: 'Somchai',
            lastName: 'Uluwatu',
            color: 'White',
            year: '2009',
            district: 'Chalong',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Honda_Accord_(2008)_front.JPG',
            isAvailable: true,
            prices: {
                perDay: 900,
                perWeek: 5000,
                perMonth: 17000,
                perMonth3m: 16000,
                perMonth6m: 15000,
                perMonth1y: 14000
            },
            desc: '',
            phone: '(+66)9-17-10-16-20',
            mobilePhone: '0917101620',
            publicEmail: 'getcar@andamancars.com',
            socialContacts: {
                viber: '(+66)9-17-10-16-20',
                skype: 'somchay003322',
                whatsapp: '(+66)9-17-10-16-20',
                facebook: 'http://facebook.com/somchai_uluwatu',
                line: '(+66)9-17-10-16-20'
            }
        }, {
            id: 3,
            type: 'auto',
            brand: 'Honda',
            model: "City",
            ownerId: 1,
            company: 'Andaman Cars',
            firstName: 'Somchai',
            lastName: 'Uluwatu',
            color: 'White',
            year: '2010',
            district: 'Chalong',
            photo: 'http://www.siaminside.com/wp-content/uploads/2014/11/Honda-Grace-Honda-City-Hybrid-01.jpg',
            isAvailable: true,
            prices: {
                perDay: 900,
                perWeek: 5000,
                perMonth: 17000,
                perMonth3m: 16000,
                perMonth6m: 15000,
                perMonth1y: 14000
            },
            desc: '',
            phone: '(+66)9-17-10-16-20',
            mobilePhone: '0917101620',
            publicEmail: 'getcar@andamancars.com',
            socialContacts: {
                viber: '(+66)9-17-10-16-20',
                skype: 'somchay003322',
                whatsapp: '(+66)9-17-10-16-20',
                facebook: 'http://facebook.com/somchai_uluwatu',
                line: '(+66)9-17-10-16-20'
            }
        }, {
            id: 4,
            type: 'auto',
            brand: 'Toyota',
            model: "Fortuner",
            ownerId: 1,
            company: 'Andaman Cars',
            firstName: 'Somchai',
            lastName: 'Uluwatu',
            color: 'White',
            year: '2012',
            district: 'Chalong',
            photo: 'http://www.carblogindia.com/wp-content/uploads/2015/01/toyota-fortuner-2.5-trd-sportivo-front.jpg',
            isAvailable: true,
            prices: {
                perDay: 900,
                perWeek: 5000,
                perMonth: 0,
                perMonth3m: 0,
                perMonth6m: 0,
                perMonth1y: 0,
                comment: 'Short terms only!'
            },
            desc: '',
            phone: '(+66)9-17-10-16-20',
            mobilePhone: '0917101620',
            publicEmail: 'getcar@andamancars.com',
            socialContacts: {
                viber: '(+66)9-17-10-16-20',
                skype: 'somchay003322',
                whatsapp: '(+66)9-17-10-16-20',
                facebook: 'http://facebook.com/somchai_uluwatu',
                line: '(+66)9-17-10-16-20'
            }
        }, {
            id: 5,
            type: 'auto',
            brand: 'Ford',
            model: "Focus",
            ownerId: 1,
            company: 'Andaman Cars',
            firstName: 'Somchai',
            lastName: 'Uluwatu',
            color: 'Yellow',
            year: '2014',
            district: 'Chalong',
            photo: 'http://avto-survey.ru/wp-content/uploads/2015/09/ford-focus-08.jpg',
            isAvailable: true,
            prices: {
                perDay: 900,
                perWeek: 5000,
                perMonth: 17000,
                perMonth3m: 16000,
                perMonth6m: 15000,
                perMonth1y: 14000
            },
            desc: '',
            phone: '(+66)9-17-10-16-20',
            mobilePhone: '0917101620',
            publicEmail: 'getcar@andamancars.com',
            socialContacts: {
                viber: '(+66)9-17-10-16-20',
                skype: 'somchay003322',
                whatsapp: '(+66)9-17-10-16-20',
                facebook: 'http://facebook.com/somchai_uluwatu',
                line: '(+66)9-17-10-16-20'
            }
        }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
