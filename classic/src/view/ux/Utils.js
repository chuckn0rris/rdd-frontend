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
        },

        renderPrices: function(val, meta, record) {
            if (!val) {
                return 'No information';
            }

            var htmlTpl = "<b>{0}:</b>&nbsp;{1}</br>",
                getString = function(title, val) {
                    return Ext.String.format(htmlTpl, title, Ext.util.Format.currentCurrency(val));
                },
                html = '';

            html += getString('1 day', val.perDay);
            if (val.perWeek) {
                html += getString('1 week', val.perWeek);
            }
            if (val.perMonth) {
                html += getString('1 month', val.perMonth);
            }
            if (val.perMonth3m) {
                html += getString('1 month (3 months cotract)', val.perMonth3m);
            }
            if (val.perMonth6m) {
                html += getString('1 month (6 months cotract)', val.perMonth6m);
            }
            if (val.perMonth1y) {
                html += getString('1 month (1 year contract)', val.perMonth1y);
            }
            if (val.comment) {
                html += Ext.String.format(htmlTpl, 'Comments', val.comment);
            }

            return html;
        }
    }
});