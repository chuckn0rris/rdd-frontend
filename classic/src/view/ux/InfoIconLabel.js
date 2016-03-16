Ext.define('Rdd.view.ux.InfoIconLabel', {
    extend: 'Ext.form.Label',

    xtype: 'infoiconlabel',
    config: {
        label: null,
        value: null,
        icon: null
    },

    setValue: function(value) {
        this.value = value;
        var html = Ext.String.format("<div style='margin: 5px;'><b><img width='24px' height='24px' src='{0}' title='{1}' align='center' /></b>&nbsp;&nbsp;{2}</div>", this.icon, this.label, this.value);
        this.setHtml(html);
    }
});