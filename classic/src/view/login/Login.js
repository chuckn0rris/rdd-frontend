Ext.define('Rdd.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'loginform',
    controller: 'login',

    requires: [
        'Rdd.view.login.LoginController'
    ],

    title: 'Log in',
    modal: true,
    width: 350,
    layout: 'vbox',
    padding: 10,
    defaults: {
        padding: 5
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Login',
        width: '100%'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Password',
        inputType: 'password',
        width: '100%'
    }, {
        xtype: 'button',
        text: 'Log in',
        width: '100%'
    }, {
        xtype: 'container',
        bind: {
            html: '<a href="javascript:void(0);">{i18n.noAccount}</a>'
        }
    }]
})