Ext.define('Rdd.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    loginOwner: function() {
        var form = this.getView().down('form');

        if (!form.isValid()) {
            return;
        }

        var values = form.getValues();
        this.getView().setLoading(true);

        Ext.Ajax.request({
            url: Urls.get('login'),
            method: 'POST',
            params: values,
            success: function(xhr) {
                var key = Ext.decode(xhr.responseText).key;
                localStorage.setItem('user-key', key);
                this.getView().setLoading(false);
                window.location.reload();
                this.getView().close();
            },
            failure: function(xhr) {
                this.getView().setLoading(false);
            },
            scope: this
        });
    },

    onSpecialKeyPress: function(field, e) {
        if (e.event.keyCode == e.ENTER) {
            this.loginOwner();
        }
    }
});
