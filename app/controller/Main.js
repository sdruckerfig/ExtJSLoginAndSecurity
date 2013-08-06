Ext.define('LoginAppDemo.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['LoginAppDemo.user.Profile'],
    views: ['LoginForm','Viewport'],
    
    init: function(application) {
        this.control({
            "loginform": {
                login: this.onLogin
            }
        });
    },

    onLogin: function(loginDialog,loginForm,loginCredentials) {
    	console.log(loginCredentials);

    	var me = this;

    	// authenticate
    	Ext.Ajax.request({
    		url: 'resources/sampledata/cred.json',
    		params: {
    			username: loginCredentials.username,
    			password: loginCredentials.password
    		},
    		success: function(response) {
    			
    			var data = Ext.decode(response.responseText);
    			
    			if (data.firstName) {

    				// instantiate user info in global scope for easy referencing
    				LoginAppDemo.User = Ext.create("LoginAppDemo.user.Profile", {
    					firstName: data.firstName,
    					lastName: data.lastName,
    					roles: data.roles
    				});

    				// destroy login dialog
    				loginDialog.destroy();


    				Ext.Msg.alert("Login Successful",
    							  Ext.String.format("Welcome {0} {1}",
    							  					LoginAppDemo.User.getFirstName(),
    							  					LoginAppDemo.User.getLastName())
    				);

    				// load main UI
    				Ext.create("LoginAppDemo.view.Viewport");


    			} else {
    				Ext.Msg.alert("Invalid credentials","You entered invalid credentials.", function() {
    					loginForm.getForm().reset();
    				})
    			}
    		}
    	});


    }
});


