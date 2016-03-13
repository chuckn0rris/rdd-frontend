Ext.define('Rdd.view.login.Login', {
    extend: 'Ext.window.Window',

    requires: [
        'Rdd.view.login.LoginController'
    ],

    xtype: 'loginform',
    controller: 'login',
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
    }]
})