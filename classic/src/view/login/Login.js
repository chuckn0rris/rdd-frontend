Ext.define('Rdd.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'loginform',

    requires: [
        'Rdd.view.login.LoginController'
    ],

    controller: 'login',

    viewModel: {
        type: 'main'
    },

    title: 'Log in',
    modal: true,
    width: 350,
    layout: 'fit',
    padding: 10,
    defaults: {
        padding: 5
    },

    items: [{
        xtype: 'form',
        layout: 'vbox',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Login',
            name: 'login',
            width: '100%'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Password',
            inputType: 'password',
            name: 'password',
            width: '100%'
        }, {
            xtype: 'button',
            text: 'Log in',
            width: '100%',
            handler: 'loginOwner'
        }, {
            xtype: 'container',
            bind: {
                html: '<a href="javascript:void(0);">{i18n.noAccount}</a>'
            }
        }]
    }]
})