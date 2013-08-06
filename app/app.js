Ext.application({
    controllers: ["Main"],
    views: ["Main"],
    name: 'LoginAppDemo',
    autoCreateViewport: false,
    launch: function() {
    	Ext.create("LoginAppDemo.view.LoginForm")
    }
});
