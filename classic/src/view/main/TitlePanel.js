Ext.define('Rdd.view.main.TitlePanel', {
    extend: 'Ext.Panel',
    xtype: 'titlepanel',

    requires: [
        'Rdd.view.login.Login'
    ],

    controller: 'main',

    layout: {
        type: 'vbox'
    },

    bodyCls: 'rdd-main-title-panel',
    items: [{
        xtype: 'userbar',
        width: '100%',
        height: 60
    }, {
        xtype: 'container',
        width: '100%',
        flex: 1,
        html:   '<div class="rdd-main-title-text-slogan"><center>Rent your bike or car with best price directly from owner on</center></div><br/>'+
                '<div class="rdd-main-title-text"><center>ron don don.com</center></div>'
    }]
});
