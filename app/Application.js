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

    defaultToken: 'home',

    launch: function () {
        // for debugging
        // this.createMainOwnerView();
        // return;

        Ext.Ajax.request({
            url: '/rest-auth/user/',
            method: 'GET',
            success: function(xhr) {
                // remember user
                var currentUser = Ext.decode(xhr.responseText).currentUser;
                // open owner console
                this.createMainView(currentUser);
            },
            failure: this.createMainView,
            scope: this
        });

    },

    createMainView: function(currentUser) {
        // for debugging
        currentUser = null;

        Ext.create({
            xtype: 'mainview',
            viewModel: {
                data: {
                    currentUser: currentUser
                }
            }
        });
    },

    createMainOwnerView: function() {
        // for debugging
        currentUser = {
            id: 1,
            company_id: 'andaman_cars',
            firstName: 'Somchai',
            lastName: 'Uluwatu',
            type: 'owner',
            isUserPage: false,
            avatar: 'http://f.otzyv.ru/f/13/07/129249/19502/0907131750373.jpg'
        }

        Ext.create({
            xtype: 'mainownerview',
            viewModel: {
                data: {
                    currentUser: currentUser
                }
            }
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
