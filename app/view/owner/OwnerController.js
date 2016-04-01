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
        var vm = this.getView().getViewModel(),
            ownerData = vm.getData();

        var wnd = Ext.create('Rdd.view.owner.EditProfile');
        wnd.setParentViewModel(vm);
        wnd.getViewModel().setData(ownerData);
        wnd.show();
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

    saveProfileChanges: function() {
        var currentOwner = this.getView().getViewModel(),
            params = currentOwner.data;

        this.getView().setLoading('Saving...');

        // TEMP FIX for encoded sub-object
        params.socialContacts = Ext.encode(params.socialContacts);
        Ext.Ajax.request({
            url: Urls.get('saveowner'),
            method: 'PUT',
            jsonData: params,
            success: function() {
                var vm = this.getView().getParentViewModel();
                vm.setData(currentOwner.data);
                this.getView().setLoading(false);
                this.getView().close();
            },
            failure: function() {
                this.getView().setLoading(false);
            },
            scope: this
        })
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
