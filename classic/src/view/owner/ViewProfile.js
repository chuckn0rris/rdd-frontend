Ext.define('Rdd.view.owner.ViewProfile', {
    extend: 'Ext.window.Window',
    xtype: 'viewprofile',

    controller: 'owner',
    viewModel: {
        type: 'owner'
    },

    bind: {
        title: 'View profile {owner.firstName} {owner.lastName}'
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
            }]
        }, {
            xtype: 'fieldset',
            title: 'Main info',
            flex: 1,
            margin: '0 10 10 10',
            layout: 'vbox',
            defaults: {
                xtype: 'displayfield',
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
                fieldLabel: 'Owner Page',
                name: 'link',
                bind: '<a href="#{owner.link}" target="_blank">rondondon.com/{owner.link}</a>'
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
                xtype: 'displayfield',
                width: '100%',
                allowBlank: false
            },
            items: [{
                fieldLabel: 'Country',
                readOnly: true,
                name: 'country',
                value: 'Thailand'
            }, {
                fieldLabel: 'City',
                name: 'city',
                bind: '{owner.city}'
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
                xtype: 'displayfield',
                width: '100%',
                labelWidth: 30,
                labelSeparator: ''
            },
            items: [{
                fieldLabel: "<img width='24px' height='24px' src='resources/images/phone.png' />",
                name: 'phone',
                bind: {
                    value: '{owner.phone}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='resources/images/mobile.png' />",
                name: 'mobilePhone',
                bind: {
                    value: '{owner.mobilePhone}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='resources/images/email.png' />",
                name: 'publicEmail',
                vtype: 'email',
                bind: {
                    value: '{owner.publicEmail}'
                }
            }, {
                xtype: 'container',
                html: '<br/>',
                width: '100%'
            }, {
                fieldLabel: "<img width='24px' height='24px' src='resources/images/whatsapp.png' />",
                name: 'whatsapp',
                bind: {
                    value: '{owner.socialContacts.whatsapp}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='resources/images/viber.png' />",
                name: 'viber',
                bind: {
                    value: '{owner.socialContacts.viber}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='resources/images/facebook.png' />",
                name: 'facebook',
                bind: {
                    value: '{owner.socialContacts.facebook}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='resources/images/skype.png' />",
                name: 'skype',
                bind: {
                    value: '{owner.socialContacts.skype}'
                }
            }, {
                fieldLabel: "<img width='24px' height='24px' src='resources/images/instagram.png' />",
                name: 'instagram',
                bind: {
                    value: '{owner.socialContacts.instagram}'
                }
            }]
        }]
    }],

    buttons: [{
        text: 'Close',
        width: 100,
        handler: 'closeProfileWindow'
    }]
});