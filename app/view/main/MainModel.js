Ext.define('Rdd.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Rdd',
        i18n: {
            listTitle: 'Available transport',
            noAccount: 'I want to register an account'
        },

        owner: {
            firstName: 'Somchai',
            lastName: 'Uluwatu',
            company: 'Andaman Cars',
            district: 'Chalong',
            phone: '(+66) 917 101 620'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
