Ext.define("LoginAppDemo.user.Profile", {
	
  config: {
    firstName: '',
    lastName: '',
    roles: []
  },

  isUserInRole: function(roles) {

  	for (var i=0; i<roles.length; i++) {
    	if (Ext.Array.contains(this.getRoles(),roles[i])) {
    		return true
    	}
   	}

   	return false;

  },

  constructor: function(config) {
    this.initConfig(config);
    this.callParent(arguments);
  }

});