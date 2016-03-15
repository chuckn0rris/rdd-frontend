Ext.define('Rdd.view.ux.InfoLabel', {
	extend: 'Ext.form.Label',

	xtype: 'infolabel',
	config: {
		label: null,
		value: null
	},

	setValue: function(value) {
		this.value = value;
		var html = Ext.String.format("<div style='margin: 5px;'><b>{0}:</b>&nbsp;&nbsp;{1}</div>", this.label, this.value);
		this.setHtml(html);
	}
})