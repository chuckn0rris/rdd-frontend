Ext.define('Rdd.view.main.TitlePanel', {
    extend: 'Ext.Panel',
    xtype: 'titlepanel',

    requires: [
        'Rdd.view.login.Login'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: {
        type: 'vbox',
        align: 'end'
    },

    bodyCls: 'rdd-main-title-panel',
    items: [{
        xtype: 'button',
        width: 200,
        margin: 20,
        text: 'I am Owner',
        style: 'padding-right: 10px;',
        handler: 'openLoginOwnerForm'
    }, {
        xtype: 'container',
        width: '100%',
        flex: 1,
        html:   '<div class="rdd-main-title-text-slogan"><center>Rent your bike or car with best price directly from owner on</center></div><br/>'+
                '<div class="rdd-main-title-text"><center>ron don don.com</center></div>'
    }]
});
