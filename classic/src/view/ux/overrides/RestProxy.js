Ext.define('Rdd.view.ux.overrides.RestProxy', {
    override: 'Ext.data.proxy.Rest',

    buildUrl: function(request) {
        var me        = this,
            operation = request.getOperation(),
            records   = operation.getRecords(),
            record    = records ? records[0] : null,
            format    = me.getFormat(),
            url       = me.getUrl(request),
            id, params;

        if (record && !record.phantom) {
            id = record.getId();
        } else {
            id = operation.getId();
        }

        if (me.getAppendId() && me.isValidId(id)) {
            if (!url.match(me.slashRe)) {
                url += '/';
            }

            url += encodeURIComponent(id) + '/';
            params = request.getParams();
            if (params) {
                delete params[me.getIdParam()];
            }
        }

        if (format) {
            if (!url.match(me.periodRe)) {
                url += '.';
            }

            url += format;
        }
        request.setUrl(url);

        return Ext.data.proxy.Server.prototype.buildUrl(request);
    }
});