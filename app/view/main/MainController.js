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

    showOwnerProfile: function() {
        var ownerId = this.getView().offer.ownerId;

        //var owner = Owner.load(ownerId);

        Ext.create('Rdd.view.owner.ViewProfile', {
        }).show();
    },

    openOffer: function(widget) {
        var tabPanel = this.lookupReference('mainTabPanel');

        var offer = widget.getWidgetRecord().data,
            title = Ext.String.format("{0} {1} {2}", offer.color, offer.brand, offer.model),
            offerTab = tabPanel.down('#offer-'+offer.id);


        // prepare title photo for viewer
        // Rdd.model.Offer.load(offer.id, function(a,b,c) {
        //     debugger
        // });

        if (offer.photos.length) {
            offer.photo = offer.photos.shift();
        } else {
            offer.photo = {};
        }

        // TEMP FIX for encoded sub-object
        if (!(offer.ownerUser.socialContacts instanceof Object)) {
            offer.ownerUser.socialContacts = Ext.decode(offer.ownerUser.socialContacts);
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
