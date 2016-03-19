Ext.define('Rdd.view.owner.Panel', {
    extend: 'Ext.Viewport',
    xtype: 'mainownerview',

    controller: 'main',
    viewModel: {
        type: 'main'
    },
    reference: 'mainView',
    layout: {
        type: 'vbox',
        align: 'center'
    },

    items: [{
        xtype: 'panel',
        width: 1000,
        style: 'padding-bottom: 5px;',
        layout: 'hbox',
        items: [{
            xtype: 'container',
            height: 100,
            flex: 1,
            layout: 'vbox',
            items: [{
                xtype: 'label',
                flex: 1,
                width: '100%',
                cls: 'rdd-owner-title-label-top',
                bind: '{owner.firstName:uppercase} {owner.lastName:uppercase}'
            }, {
                xtype: 'component',
                width: '100%',
                height: 2,
                cls: 'rdd-owner-title-line'
            }, {
                xtype: 'label',
                flex: 1,
                width: '100%',
                cls: 'rdd-owner-title-label-bottom',
                bind: '{owner.district}'
            }]
        }, {
            xtype: 'image',
            height: 100,
            width: 100,
            src: 'http://f.otzyv.ru/f/13/07/129249/19502/0907131750373.jpg',
            cls: 'rdd-owner-avatar-img'
        }, {
            xtype: 'container',
            height: 100,
            flex: 1,
            layout: 'vbox',
            items: [{
                xtype: 'label',
                flex: 1,
                width: '100%',
                cls: 'rdd-owner-title-label-top',
                bind: '{owner.company:uppercase}'
            }, {
                xtype: 'component',
                width: '100%',
                height: 2,
                cls: 'rdd-owner-title-line'
            }, {
                xtype: 'label',
                flex: 1,
                width: '100%',
                cls: 'rdd-owner-title-label-bottom',
                bind: '{owner.phone}'
            }]
        }]
    }, {
        xtype: 'transportlist',
        width: 1000,
        flex: 1
    }]
});