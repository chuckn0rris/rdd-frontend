/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Rdd.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Rdd',
        i18n: {
        	listTitle: 'Available transport',
        	noAccount: 'I want to register an account'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
