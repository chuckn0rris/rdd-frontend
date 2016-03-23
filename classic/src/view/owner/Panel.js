Ext.define('Rdd.view.owner.Panel', {
    extend: 'Ext.Viewport',
    xtype: 'mainownerview',

    requires: [
        'Rdd.view.owner.OwnerController',
        'Rdd.view.owner.OwnerModel',
        'Rdd.view.owner.EditProfile',
        'Rdd.view.owner.ViewProfile'
    ],

    controller: 'owner',

    viewModel: {
        type: 'owner'
    },
    layout: {
        type: 'vbox',
        align: 'center'
    },
    items: [{
        xtype: 'panel',
        width: 1000,
        layout: 'hbox',
        tbar: [{
            text: 'Show all offers',
            width: 150,
            handler: 'redirectHome'
        }, '->', {
            text: 'Logout',
            width: 150,
            hidden: true,
            bind: {
                hidden: '{!currentUser}'
            },
            handler: 'logout'
        }],

        bbar: [{
            width: 150,
            text: 'Add Record',
            hidden: true,
            bind: {
                hidden: '{!currentUser.isUserPage}'
            },
            handler: 'addRecord'
        }, '->', {
            text: 'Edit profile',
            width: 150,
            hidden: true,
            bind: {
                hidden: '{!currentUser.isUserPage}'
            },
            handler: 'editProfile'
        }],
        items: [{
            xtype: 'container',
            height: 100,
            flex: 1,
            margin: '10 0 10 0',
            layout: 'vbox',
            items: [{
                xtype: 'label',
                cls: 'rdd-owner-title-label-top',
                flex: 1,
                width: '100%',
                bind: '{owner.firstName:uppercase} {owner.lastName:uppercase}'
            }, {
                xtype: 'component',
                cls: 'rdd-owner-title-line',
                width: '100%',
                height: 2
            }, {
                xtype: 'label',
                cls: 'rdd-owner-title-label-bottom',
                flex: 1,
                width: '100%',
                bind: '{owner.district}'
            }]
        }, {
            xtype: 'image',
            cls: 'rdd-owner-avatar-img',
            margin: '10 0 10 0',
            height: 100,
            width: 100,
            bind: {
                src: '{owner.avatar}'
            }
        }, {
            xtype: 'container',
            height: 100,
            flex: 1,
            margin: '10 0 10 0',
            layout: 'vbox',
            items: [{
                xtype: 'label',
                cls: 'rdd-owner-title-label-top',
                flex: 1,
                width: '100%',
                bind: '{owner.company:uppercase}'
            }, {
                xtype: 'component',
                cls: 'rdd-owner-title-line',
                width: '100%',
                height: 2
            }, {
                xtype: 'label',
                cls: 'rdd-owner-title-label-bottom',
                flex: 1,
                width: '100%',
                bind: '{owner.phone}'
            }]
        }]
    }, {
        xtype: 'tabpanel',
        reference: 'mainTabPanel',
        width: 1000,
        flex: 1,
        items: [{
            xtype: 'transportlist',
            title: 'Offers'
        }]
    }]
});