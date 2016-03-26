Ext.define('Rdd.view.ux.Urls', {
	singleton: true,
	alternateClassName: 'Urls',

	apiVersion: 'v1',
	get: function(id, params) {
		var urlPath = Urls.urls[id];
		if (!urlPath) {
			Ext.Msg.alert('Undefined URL', 'No URL defined for id "'+id+'". Please, check it again!.');
			return '';
		}
		var url = Ext.String.format(urlPath, params);

		return Ext.String.format("{0}/api/{1}/{2}/", Urls.getHost(), Urls.apiVersion, url);
	},

	getHost: function() {
		var host;
		if (location.hostname == 'localhost') {
			host = 'http://localhost:1337/http://rondondon.com:8000';
		} else {
			host = '';
		}
		return host;
	},

	urls: {
		offers: 'offers',
		login: 'rest-auth/login',
		currentuser: 'rest-auth/user'
	}
});