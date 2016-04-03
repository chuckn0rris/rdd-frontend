Ext.define('Rdd.view.owner.OwnerModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.owner',

    data: {
        'id': null,
        'firstName': null,
        'lastName': null,
        'company': null,
        'city': null,
        'link': null,
        'avatar': null,
        'district': null,
        'mapCoordinates': null,
        'publicEmail': null,
        'mobilePhone': null,
        'phone': null,
        'socialContacts': null
    }
});