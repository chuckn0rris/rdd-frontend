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
       Ext.Ajax.request({
            url: Urls.get('logout'),
            method: 'POST',
            success: function(xhr) {
                localStorage.removeItem('user-key');
                window.location.reload();
            },
            scope: this
        });
    },

    loadTransportsStore: function() {
        var model = this.getView().getViewModel(),
            store = this.getView().down('transportlist').getStore();

        store.getProxy().url = Urls.get('transportlist', model.get('id'));
        store.load();
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
            params = Ext.clone(currentOwner.data);

        this.getView().setLoading('Saving...');

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
        });
    },

    saveTransport: function() {
        var transport = this.getView().getViewModel().data;

        this.getView().setLoading('Saving changes...');

         Ext.Ajax.request({
            url: Urls.get('savetransport', [transport.owner, transport.id]),
            method: 'PUT',
            jsonData: transport,
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
        });
    },

    closeWindow: function() {
        this.getView().close();
    },

    loadAvatarPhoto: function(btn, val) {
        var ownerData = this.getView().getViewModel().data,
            key = localStorage.getItem('user-key');

        btn.up('form').submit({
            url: Urls.get('setowneravatar', ownerData.id),
            headers: {
                Authorization: Ext.String.format("Token {0}", key)
            },
            waitMsg: 'Uploading Photo...',
            success: function(fp, o) {
                Ext.Msg.alert('Success', 'Your photo "' + o.result.file + '" has been uploaded.');
            },
            failure: function(form, action) {
                switch (action.failureType) {
                    case Ext.form.action.Action.CLIENT_INVALID:
                        Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                        break;
                    case Ext.form.action.Action.CONNECT_FAILURE:
                        Ext.Msg.alert('Failure', 'Ajax communication failed');
                        break;
                    case Ext.form.action.Action.SERVER_INVALID:
                       Ext.Msg.alert('Failure', action.result.msg);
               }
            }
        })
    },

    removeAvatarImage: function() {
        var ownerData = this.getView().getViewModel().data;

        Ext.Ajax.request({
            url: Urls.get('setowneravatar', ownerData.id),
            method: 'DELETE',
            success: function() {
                this.getView().getViewModel().set('avatar', null);
            },
            scope: this

        })
    }
});
