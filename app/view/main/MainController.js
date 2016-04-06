Ext.define('Rdd.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {

    },

    openLoginOwnerForm: function() {
        Ext.create('Rdd.view.login.Login').show();
    },

    openMyProfile: function() {
        this.redirectTo('#myprofile');
    },

    signOut: function() {
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

    showOwnerProfile: function(btn) {
        btn.setDisabled(true);
        var ownerId = this.getView().offer.owner;

        var owner = Rdd.model.Owner.load(ownerId, {
            failure: function() {
                btn.setDisabled(false);
            },
            success: function(owner) {
                btn.setDisabled(false);
                Ext.create('Rdd.view.owner.ViewProfile', {
                    viewModel: {
                        data: owner.getData()
                    }
                }).show();
            },
            scope: this
        });

    },

    openOffer: function(widget) {
        var tabPanel = this.lookupReference('mainTabPanel');

        var offer = widget.getWidgetRecord().data,
            title = Ext.String.format("{0} {1} {2}", offer.color, offer.brand, offer.model),
            offerTab = tabPanel.down('#offer-'+offer.id);

        if (offer.photos.length) {
            offer.photo = offer.photos.shift();
        } else {
            offer.photo = {};
        }

        if (offerTab) {
            tabPanel.setActiveTab(offerTab);
        } else {
            tabPanel.add({
                xtype: 'offerdetails',
                id: 'offer-'+offer.id,
                title: title,
                closable: true,
                viewModel: {
                    type: 'offer',
                    data: {
                        offer: offer
                    }
                }
            });

            tabPanel.setActiveTab(tabPanel.items.length-1);
        }
    },

    closeOfferDetails: function() {
        this.getView().close();
    },

    applyFilters: function() {
        var filters = this.getView().getValues(),
            grid = this.getView().up('mainlist'),
            store = grid.getStore();

        store.getProxy().setExtraParams(filters);
        store.load();
    },

    resetFilters: function() {
        this.getView().reset();
        var store = this.getView().up('mainlist').getStore();

        store.getProxy().setExtraParams({});
        store.load();
    }
});
