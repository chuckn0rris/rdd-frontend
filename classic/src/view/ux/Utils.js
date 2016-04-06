Ext.define('Rdd.view.ux.Utils', {
    singleton: true,
    alternateClassName: 'Utils',

    format: {
        date: 'm/d/Y',
        currency: '{0}฿',
        milage: '{0}km'
    },

    renderer: {
        renderIsAvailableHtml: function(record) {
            var html = '',
                AVAILABLE_NOW_HTML = "<span style='color: green'>Available right now!</span>",
                AVAILABLE_FROM_HTML = "<b>Available from:</b>&nbsp;{0}</br>",
                NOT_AVAILABLE_HTML = "<span style='color: red'>Not available now. Call to owner.</span>";

            if (record.get('isAvailable')) {
                html = AVAILABLE_NOW_HTML;
            } else if (record.get('availableFrom')) {
                var date = new Date(record.get('availableFrom'));
                    isDateInPast = date.getTime() < (new Date()).getTime();

                    html = isDateInPast ? AVAILABLE_NOW_HTML : Ext.String.format(AVAILABLE_FROM_HTML, Ext.Date.format(record.get('availableFrom'), Utils.format.date));
            } else {
                html = NOT_AVAILABLE_HTML;
            }

            return html;
        }
    }
});