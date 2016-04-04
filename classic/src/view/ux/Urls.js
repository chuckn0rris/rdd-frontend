Ext.define('Rdd.view.ux.Urls', {
    singleton: true,
    alternateClassName: 'Urls',

    apiVersion: 'v1',
    get: function() {
        var id = arguments[0],
            p1 = arguments[1], p2 = arguments[2],
            p3 = arguments[3], p4 = arguments[4], p5 = arguments[5];
        var urlPath = Urls.urls[id];
        if (!urlPath) {
            Ext.Msg.alert('Undefined URL', 'No URL defined for id "'+id+'". Please, check it again!.');
            return '';
        }

        var url = Ext.String.format(urlPath, p1, p2, p3, p4, p5);

        return Ext.String.format("{0}/api/{1}/{2}/", Urls.getHost(), Urls.apiVersion, url);
    },

    getHost: function() {
        var host;
        if (location.hostname == 'localhost') {
            host = 'http://localhost:1337/rondondon.com';
        } else {
            host = '';
        }
        return host;
    },

    urls: {
        offers: 'offers',
        offer: 'offers',
        login: 'rest-auth/login',
        currentuser: 'user',
        logout: 'rest-auth/logout',
        getownerid: 'owners',
        getowner: 'owners',
        setowneravatar: 'owners/{0}/image',
        saveowner: 'user',
        transportlist: 'owners/{0}/transports',
        loadtransportphoto: 'owners/{0}/transports/{1}/image'
    }
});