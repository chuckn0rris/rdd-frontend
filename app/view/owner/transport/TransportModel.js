Ext.define('Rdd.view.owner.transport.TransportModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.transport',

    data: {
        isAvailable: null,
        'id': null,
        'atype': null,
        'photos': [],
        'brand': null,
        'model': null,
        'color': null,
        'year': null,
        'isAvailable': null,
        'mileage': null,
        'availableFrom': null,
        'meta': null,
        'desc': null,
        'prices': null,
        'owner': null
    },

    formulas: {
    	isAuto: function(get) {
    		return get('atype') == 'auto';
    	}
    }
});