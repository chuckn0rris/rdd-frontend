Ext.define('Rdd.view.owner.Panel', {
    extend: 'Ext.Viewport',
    xtype: 'mainownerview',

    requires: [
        'Rdd.view.owner.OwnerController'
    ],

    controller: 'owner',

    viewModel: {
        type: 'main'
    },
    layout: {
        type: 'vbox',
        align: 'center'
    },

    items: [{
        xtype: 'panel',
        width: 1000,
        layout: 'hbox',
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
        xtype: 'transportlist',
        width: 1000,
        flex: 1
    }]
});