Ext.define('Rdd.ux.overrides.RequiredFieldLabelPatch', {
    override: 'Ext.form.field.Text',

    afterRender: function() {
        this.callParent();
        // run label update
        this.setFieldLabel(this.getFieldLabel());
    },

    setFieldLabel: function(label) {
        var starHtml = '<span style="color:red;">*</span>';
        if (!this.allowBlank && label.length) {
            label += starHtml;
        }

        this.callParent(arguments);
    },

    getFieldLabel: function() {
        var label = this.trimLabelSeparator();
        return label.replace('<span style="color:red;">*</span>', '');
    }
});