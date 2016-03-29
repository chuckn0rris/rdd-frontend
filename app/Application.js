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
        'myprofile': 'setOwnerView'
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
                // remember user
                var currentUser = Ext.decode(xhr.responseText);
                // open owner console
                this.createMainView(currentUser);
            },
            failure: function() {
                var fakeOwner = null//this.getFakeOwner();
                this.createMainView(fakeOwner);
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
        var oldView = Ext.getCmp('main-view');
        if (oldView) {
            oldView.destroy();
        }
        Ext.create({
            xtype: this.mainPageXtype,
            id: 'main-view',
            renderTo: Ext.getBody(),
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
    },

    getFakeOwner: function() {
        return {"date_joined":"2016-03-26T16:26:05Z","email":"mixxx_a@mail.ru","last_login":"2016-03-28T09:18:29.044477Z","firstName":"РњРёС…Р°РёР»","lastName":"Р”СѓРґРєРёРЅ","company":"none","country":"Thailand","zipCode":"10000","city":"РќРѕРІРѕСЃРёР±РёСЂСЃРє","district":"","address1":"none","address2":"none","timezone":"None/None","organisation":"","mapCoordinates":"1000, 2000","phone":"","mobilePhone":"","publicEmail":"","socialContacts":"","avatar":"https://rdd-storage-s3.s3.amazonaws.com/photos/avatars/BPwqMo9mKZA.jpg?Signature=%2BrRvcuJ21tE325Ib80lRTeoU8OA%3D&Expires=1459160393&AWSAccessKeyId=AKIAISFWTG4ZXV5SHZEQ","meta":""};
    }
});
