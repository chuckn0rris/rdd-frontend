Ext.define('Rdd.view.main.UserBar', {
    extend: 'Ext.Container',
    xtype: 'userbar',

    controller: 'main',

    layout: {
        type: 'hbox'
    },

    bodyCls: 'rdd-main-userbar',
    height: 60,
    items: [{
        xtype: 'container',
        flex: 1
    },{
        xtype: 'button',
        width: 200,
        margin: 20,
        hidden: true,
        bind: {
            hidden: '{firstName}'
        },
        text: 'I am Owner',
        style: 'padding-right: 10px;',
        handler: 'openLoginOwnerForm'
    }, {
        xtype: 'label',
        width: 200,
        height: '100%',
        margin: 20,
        cls: 'rdd-main-userbar-label',
        hidden: true,
        bind: {
            html: 'Hi, <a href="javascript:void(0);">{firstName}</a>',
            hidden: '{!firstName}'
        },
        clickable: true,
        listeners: {
            afterrender: function(label) {
                label.el.dom.onclick = function() {
                    var m = Ext.create('Ext.menu.Menu', {
                        margin: 10,
                        items: [{
                            text: 'Show My Profile Page',
                            margin: 2,
                            handler: 'openMyProfile'
                        }, {
                            text: 'Sign Out',
                            margin: 2,
                            handler: 'signOut'
                        }]
                    });
                    m.showBy(label.el.dom, 'tr-br', [0, 5]);
                }
            }
        }
    }, {
    }, {
        xtype: 'image',
        height: 50,
        width: 50,
        cls: 'rdd-main-userbar-img',
        hidden: true,
        bind: {
            src: '{avatar}',
            hidden: '{!firstName}'
        }
    }]
});