Ext.define('Rdd.view.ux.Utils', {
    singleton: true,
    alternateClassName: 'Utils',

    format: {
    	date: 'm/d/Y'
    },

    renderer: {
    	renderIsAvailableHtml: function(record) {
    		var html = '';
    		if (record.get('isAvailable')) {
                html = "<span style='color: green'>Available right now!</span>";
            } else if (record.get('availableFrom')) {
                html = Ext.String.format("<b>Available from:</b>&nbsp;{0}</br>", Ext.Date.format(record.get('availableFrom'), Utils.format.date));
            } else {
                html = "<span style='color: red'>Not available now. Call to owner.</span>";
            }

            return html;
    	}
    }
});