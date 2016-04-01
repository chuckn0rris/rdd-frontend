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

    routes: {
        'home': 'setHomeView',
        'myprofile': 'setOwnerView',
        ':id': 'checkHash'
    },

    launch: function () {
        this.removeLoadingAnimation();
        this.initAjaxListeners();
    },

    checkCurrentUser: function() {
        Ext.Ajax.request({
            url: Urls.get('currentuser'),
            method: 'GET',
            success: function(xhr) {
                var currentUser = Ext.decode(xhr.responseText);
                if (currentUser.firstName) {
                    currentUser.isOwnPage = (window.location.hash == '#myprofile');
                }
                // TEMP FIX for encoded sub-object
                if (currentUser.socialContacts) {
                    currentUser.socialContacts = Ext.decode(currentUser.socialContacts);
                }
                this.createMainView(currentUser);
            },
            failure: function(xhr) {
                if (xhr.status < 500) {
                    localStorage.removeItem('user-key');
                }
                this.createMainView(null);
            },
            scope: this
        });
    },

    initAjaxListeners: function() {
        Ext.Ajax.on('beforerequest', function(connection, options) {
            options.params = options.params || {};
            options.params.format = 'json';
            var key = localStorage.getItem('user-key');
            if (key) {
                options.headers = options.headers || {};
                options.headers["Authorization"] = Ext.String.format("Token {0}", key);
            }
        });

        Ext.Ajax.on('requestexception', function(conn, response, options, eOpts) {
            if (response.status == 403) {
            } else {
                var msg = response.responseText ? Ext.decode(response.responseText) : {error: 'Empty server response.'};
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
        var oldView = Ext.getCmp('main-view');
        if (oldView && oldView.destroy) {
            oldView.destroy();
        }

        Ext.create({
            xtype: this.mainPageXtype,
            id: 'main-view',
            renderTo: Ext.getBody(),
            viewModel: {
                data: currentUser || {firstName: false}
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
    },

    setOwnerView: function() {
        this.showMask();
        this.mainPageXtype = 'mainownerview';
        this.checkCurrentUser();
    },

    setHomeView: function() {
        this.showMask();
        this.mainPageXtype = 'mainview';
        this.checkCurrentUser();
    },

    checkHash: function(hash) {
        var ALLOWED_HASHES = ['home', 'myprofile'];
        if (ALLOWED_HASHES.indexOf(hash) > -1)
            return;

        Ext.Ajax.request({
            url: Urls.get('getownerid'),
            params: {
                link: hash
            },
            success: function(xhr) {
                var ownerId = Ext.decode(xhr.responseText);
                this.mainPageXtype = 'mainownerview';
                this.loadOwner(ownerId);
            },
            failure: function() {
                this.redirectTo('#home');
            },
            scope: this
        });
    },

    showMask: function() {
        var mainView = Ext.getCmp('main-view');
        if (mainView) {
            mainView.setLoading('Please, wailt...');
        }
    },

    removeLoadingAnimation: function() {
        var maskEl = Ext.query('#load-site-img')[0];
        if (maskEl) {
            maskEl.remove();
        }
    }
});
