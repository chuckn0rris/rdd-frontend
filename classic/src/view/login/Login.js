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
        defaults: {
            xtype: 'textfield',
            allowBlank: false,
            hideLabel: true,
            width: '100%',
            enableKeyEvents: true,
            listeners: {
                specialkey: 'onSpecialKeyPress'
            }
        },
        items: [{
            emptyText: 'Email',
            name: 'email'
        }, {
            emptyText: 'Password',
            inputType: 'password',
            name: 'password'
        }, {
            xtype: 'button',
            text: 'Log in',
            formBind: true,
            width: '100%',
            handler: 'loginOwner'
        }, {
            xtype: 'container',
            style: 'padding-top: 5px;',
            bind: {
                html: '<a href="javascript:void(0);">{i18n.noAccount}</a>'
            }
        }]
    }]
})