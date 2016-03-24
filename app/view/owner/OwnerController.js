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
            mainTabPanel = this.getView().mainTabPanel,
            title = Ext.String.format("{0} {1} {2}", values.color, values.brand, values.model);

        values.photos = [{
            id: 1,
            transportId: '1',
            url: 'http://autosearchmanila.com/auto-search/uploads/public/models/43/2015%5C01%20Toyota-Vios-2013-2.jpg'
        }, {
            id: 2,
            transportId: '1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Honda_Accord_(2008)_front.JPG'
        }, {
            id: 3,
            transportId: '1',
            url: 'http://www.carblogindia.com/wp-content/uploads/2015/01/toyota-fortuner-2.5-trd-sportivo-front.jpg'
        }];
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
    },

    onLoadPhotoFormChange: function(f, v) {
        // TODO: use real URL
        f.up('form').submit({
            url: 'photo-upload.php',
            waitMsg: 'Uploading Photo',
            success: function(fp, o) {
                Ext.Msg.alert('Success', 'Your photo "' + o.result.file + '" has been uploaded.');
            }
        })
    }
});
