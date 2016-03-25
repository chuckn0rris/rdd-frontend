Ext.define('Rdd.view.owner.EditProfile', {
    extend: 'Ext.window.Window',
    xtype: 'editprofile',

    controller: 'owner',
    viewModel: {
        type: 'owner'
    },

    bind: {
        title: 'Edit profile {owner.firstName} {owner.lastName}'
    },

    modal: true,
    width: 800,
    resizable: false,

    items: [{
        xtype: 'container',
        layout: 'hbox',
        width: '100%',
        items: [{
            xtype: 'container',
            layout: 'vbox',
            marign: 10,
            items: [{
                xtype: 'image',
                margin: 10,
                cls: 'rdd-owner-editform-avatar',
                height: 120,
                width: 120,
                bind: {
                    src: '{owner.avatar}'
                }
            }, {
                xtype: 'form',
                width: 120,
                margin: 10,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                height: 33,
                items: [{
                    xtype: 'filefield',
                    name: 'photo',
                    flex: 1,
                    buttonConfig: {
                        width: 120
                    },
                    hideLabel: true,
                    buttonOnly: true,
                    msgTarget: 'side',
                    buttonText: 'Load Photo',
                    listeners: {
                        change: 'onLoadPhotoFormChange'
                    }
                }]
            }, {
                xtype: 'button',
                margin: '0 10',
                text: 'Remove Photo',
                width: 120,
                handler: 'removeAvatarImage'
            }]
        }, {
            xtype: 'fieldset',
            title: 'Main info',
            flex: 1,
            margin: '0 10 10 10',
            layout: 'vbox',
            defaults: {
                xtype: 'textfield',
                width: '100%',
                allowBlank: false
            },
            items: [{
                fieldLabel: 'First Name',
                name: 'firstName',
                bind: '{owner.firstName}'
            }, {
                fieldLabel: 'Last Name',
                name: 'lastName',
                bind: '{owner.lastName}'
            }, {
                fieldLabel: 'Company',
                name: 'company',
                bind: '{owner.company}',
                allowBlank: true
            }, {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                width: '100%',
                items: [{
                    xtype: 'textfield',
                    width: '85%',
                    fieldLabel: 'Web Link',
                    name: 'link',
                    bind: '{owner.link}'
                }, {
                    xtype: 'button',
                    text: 'Check',
                    width: '15%',
                    handler: 'checkLinkAvailable'
                }]
            }]
        }]
    }, {
        xtype: 'container',
        layout: 'hbox',
        width: '100%',
        items: [{
            xtype: 'fieldset',
            title: 'Location',
            height: '100%',
            margin: '0 10 10 10',
            flex: 1,
            defaults: {
                xtype: 'textfield',
                width: '100%',
                allowBlank: false
            },
            items: [{
                fieldLabel: 'Country',
                readOnly: true,
                name: 'country',
                value: 'Thailand'
            }, {
                xtype: 'combobox',
                fieldLabel: 'City',
                name: 'city',
                bind: '{owner.city}',
                valueField: 'id',
                displayField: 'name',
                store: {
                    fields: ['id', 'name'],
                    data: [{
                        id: 'bangkok',
                        name: 'Bangkok'
                    }, {
                        id: 'pattaya',
                        name: 'Pattaya'
                    }, {
                        id: 'phuket',
                        name: 'Phuket'
                    }, {
                        id: 'krabi',
                        name: 'Krabi'
                    }]
                }
            }, {
                fieldLabel: 'District',
                name: 'district',
                bind: '{owner.district}'
            }, {
                xtype: 'panel',
                height: 250,
                width: '100%',
                border: true,
                html: '<center><div style="padding-top:20px"><h3>Here will be a map soon...</h3></div></center>'
            }]
        }, {
            xtype: 'fieldset',
            title: 'Contacts',
            flex: 1,
            layout: 'vbox',
            margin: '0 10 10 0',
            defaults: {
                xtype: 'textfield',
                width: '100%',
                labelWidth: 30,
                labelSeparator: ''
            },
            items: [{
                fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/phone.png' />",
                name: 'phone',
                bind: {
                    value: '{offer.phone}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/mobile.png' />",
                name: 'mobilePhone',
                bind: {
                    value: '{offer.mobilePhone}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/email.png' />",
                name: 'publicEmail',
                vtype: 'email',
                bind: {
                    value: '{offer.publicEmail}'
                }
            }, {
                xtype: 'container',
                html: '<br/>',
                width: '100%'
            }, {
                fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/whatsapp.png' />",
                name: 'whatsapp',
                bind: {
                    value: '{offer.socialContacts.whatsapp}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/viber.png' />",
                name: 'viber',
                bind: {
                    value: '{offer.socialContacts.viber}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/facebook.png' />",
                name: 'facebook',
                bind: {
                    value: '{offer.socialContacts.facebook}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/skype.png' />",
                name: 'skype',
                bind: {
                    value: '{offer.socialContacts.skype}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/instagram.png' />",
                name: 'instagram',
                bind: {
                    value: '{offer.socialContacts.instagram}'
                }
            }]
        }]
    }],

    buttons: [{
        text: 'Save',
        width: 100,
        handler: 'saveProfileChanges'
    }, {
        text: 'Close',
        width: 100,
        handler: 'closeWindow'
    }]
});