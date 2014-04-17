(function($){

	var html = App.Templates.header.template() + 
						 App.Templates.home.template({username: 'Micah Blu'}) +
						 App.Templates.sidebar.template() +
						 App.Templates.footer.template();

  $("body").append(html);

}(jQuery));