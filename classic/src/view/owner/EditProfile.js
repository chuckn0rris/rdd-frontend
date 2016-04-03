Ext.define('Rdd.view.owner.EditProfile', {
    extend: 'Ext.window.Window',
    xtype: 'editprofile',

    controller: 'owner',
    viewModel: {
        type: 'owner'
    },

    bind: {
        title: 'Edit profile {firstName} {lastName}'
    },

    config: {
        parentViewModel: null
    },

    modal: true,
    width: 800,
    resizable: false,

    items: [{
        xtype: 'form',
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
                        src: '{avatar}'
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
                            change: 'loadAvatarPhoto'
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
                    bind: '{firstName}'
                }, {
                    fieldLabel: 'Last Name',
                    name: 'lastName',
                    bind: '{lastName}'
                }, {
                    fieldLabel: 'Company',
                    name: 'company',
                    bind: '{company}'
                }, {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    disabled: true,
                    width: '100%',
                    items: [{
                        xtype: 'textfield',
                        width: '85%',
                        fieldLabel: 'Web Link',
                        name: 'link',
                        bind: '{link}'
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
                    allowBlank: false,
                    labelWidth: 70
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
                    bind: '{city}',
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
                    bind: '{district}'
                }, {
                    fieldLabel: 'Address 1',
                    name: 'address1',
                    bind: '{address1}'
                }, {
                    fieldLabel: 'Address 2',
                    name: 'address2',
                    bind: '{address2}'
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
                        value: '{phone}'
                    }
                }, {
                    fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/mobile.png' />",
                    name: 'mobilePhone',
                    bind: {
                        value: '{mobilePhone}'
                    }
                }, {
                    fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/email.png' />",
                    name: 'publicEmail',
                    vtype: 'email',
                    bind: {
                        value: '{publicEmail}'
                    }
                }, {
                    xtype: 'container',
                    html: '<br/>',
                    width: '100%'
                }, {
                    fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/whatsapp.png' />",
                    name: 'whatsapp',
                    bind: {
                        value: '{socialContacts.whatsapp}'
                    }
                }, {
                    fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/viber.png' />",
                    name: 'viber',
                    bind: {
                        value: '{socialContacts.viber}'
                    }
                }, {
                    fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/facebook.png' />",
                    name: 'facebook',
                    bind: {
                        value: '{socialContacts.facebook}'
                    }
                }, {
                    fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/skype.png' />",
                    name: 'skype',
                    bind: {
                        value: '{socialContacts.skype}'
                    }
                }, {
                    fieldLabel: "<img width='24px' height='24px' src='classic/resources/images/instagram.png' />",
                    name: 'instagram',
                    bind: {
                        value: '{socialContacts.instagram}'
                    }
                }]
            }]
        }],
        buttons: [{
            text: 'Save',
            formBind: true,
            width: 100,
            handler: 'saveProfileChanges'
        }, {
            text: 'Close',
            width: 100,
            handler: 'closeWindow'
        }]
    }]
});