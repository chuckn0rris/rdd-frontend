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
        this.initAjaxListeners();
        // delete loading animation
        Ext.query('#load-site-img')[0].remove();

        // for debugging
        // this.createMainOwnerView();
        // return;

        Ext.Ajax.request({
            url: Urls.get('currentuser'),
            method: 'GET',
            success: function(xhr) {
                // remember user
                var currentUser = Ext.decode(xhr.responseText).currentUser;
                // open owner console
                this.createMainView(currentUser);
            },
            failure: function() {
                this.createMainView(null);
            },
            scope: this
        });

    },

    initAjaxListeners: function() {
        Ext.Ajax.on('beforerequest', function(connection, options) {
            options.params = options.params || {};
            options.params.format = 'json';
        });

        Ext.Ajax.on('requestexception', function(conn, response, options, eOpts) {
            if (response.status == 403) {
            } else {
                var msg = Ext.decode(response.responseText);
                Ext.Msg.show({
                    title: 'Server returned an error.',
                    message: msg.error || 'Server returned an error.',
                    width: 400,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }, this);
    },

    createMainView: function(currentUser) {
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
        var currentUser = {
            id: 1,
            company_id: 'andaman_cars',
            firstName: 'Somchai',
            lastName: 'Uluwatu',
            type: 'owner',
            isUserPage: true,
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
