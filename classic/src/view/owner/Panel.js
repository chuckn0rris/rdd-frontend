Ext.define('Rdd.view.owner.Panel', {
    extend: 'Ext.Viewport',
    xtype: 'mainownerview',

    requires: [
        'Ext.tab.Panel',
        'Rdd.view.owner.OwnerController',
        'Rdd.view.owner.OwnerModel',
        'Rdd.view.owner.EditProfile',
        'Rdd.view.owner.ViewProfile',
        'Rdd.view.owner.transport.CreateWindow'
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
                hidden: '{!firstName}'
            },
            handler: 'logout'
        }],

        bbar: [{
            width: 150,
            text: 'Add Record',
            hidden: true,
            bind: {
                hidden: '{!isOwnPage}'
            },
            handler: 'addRecord'
        }, '->', {
            text: 'Edit profile',
            width: 150,
            hidden: true,
            bind: {
                hidden: '{!isOwnPage}'
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
                bind: '{firstName:uppercase} {lastName:uppercase}'
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
                bind: '{district}'
            }]
        }, {
            xtype: 'image',
            cls: 'rdd-owner-avatar-img',
            margin: '10 0 10 0',
            height: 100,
            width: 100,
            bind: {
                src: '{avatar}'
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
                bind: '{company:uppercase}'
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
                bind: '{phone}'
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