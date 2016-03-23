Ext.define('Rdd.view.owner.OwnerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.owner',

    addRecord: function() {
        Ext.create('Rdd.view.owner.transport.CreateWindow', {
            mainTabPanel: this.getView().lookupReference('mainTabPanel')
        }).show();
    },

    redirectHome: function() {
        this.redirectTo('home');
    },

    logout: function() {

    },

    editProfile: function() {
        Ext.create('Rdd.view.owner.EditProfile').show();
    },

    checkLinkAvailable: function() {

    },

    closeProfileWindow: function() {
        this.getView().close();
    },

    addTransportRecord: function() {
        var values = this.getView().down('form').getValues(),
            mainTabPanel = this.getView().mainTabPanel;
            title = Ext.String.format("{0} {1} {2}", values.color, values.brand, values.model);

        values.photos = [];
        mainTabPanel.add({
            xtype: 'edittransport',
            title: title,
            closable: true,
            viewModel: {
                data: values
            }
        });

        mainTabPanel.setActiveTab(mainTabPanel.items.length-1);
        this.closeWindow();
    },

    closeWindow: function() {
        this.getView().close();
    }
});
