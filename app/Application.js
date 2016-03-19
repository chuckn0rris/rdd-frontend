/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Rdd.Application', {
    extend: 'Ext.app.Application',

    name: 'Rdd',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // for debugging
        this.createMainOwnerView();
        return;

        Ext.Ajax.request({
            url: '/rest-auth/user/',
            method: 'GET',
            success: function(xhr) {
                // remember owner
                // open owner console
                this.createMainOwnerView();
            },
            failure: this.createMainView,
            scope: this
        });

    },

    createMainView: function() {
        Ext.create({
            xtype: 'mainview'
        });
    },

    createMainOwnerView: function() {
        Ext.create({
            xtype: 'mainownerview'
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
