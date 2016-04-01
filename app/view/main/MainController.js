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
            viewModel: {
                data: {
                    owner: {
                        'id': 1,
                        'firstName': 'Somchai',
                        'lastName': 'Uluwatu',
                        'company': 'Andaman Cars',
                        'district': 'Chalong',
                        'city': 'Phuket',
                        'country': 'Thailand',
                        'socialContacts': {
                            viber: '0917101620',
                            facebook: 'www.facebook.com/1237600334',
                            whatsapp: '0917101620',
                            skype: 'somchai00112',
                            instagram: '@somchaika'
                        },
                        'avatar': 'http://f.otzyv.ru/f/13/07/129249/19502/0907131750373.jpg',
                        'type': 'owner',
                        'publicEmail': 'som_thai@gmail.com',
                        'mobilePhone': '0917101620',
                        'phone': '0917101620',
                        'link': 'andaman_cars'
                    }
                }
            }
        }).show();
    },

    openOffer: function(widget) {
        var tabPanel = this.lookupReference('mainTabPanel');

        var offer = widget.getWidgetRecord().data,
            title = Ext.String.format("{0} {1} {2}", offer.color, offer.brand, offer.model),
            offerTab = tabPanel.down('#offer-'+offer.id);


        // prepare title photo for viewer
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
        var filters = this.getView().getValues();
            grid = this.getView().up('mainlist'),
            proxy = grid.getStore().getProxy();

        proxy.setExtraParams(filters);
    },

    resetFilters: function() {
        this.getView().reset();
        this.getView().up('mainlist').getStore().getProxy().setExtraParams({});
    }
});
