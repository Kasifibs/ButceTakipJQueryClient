var MainTemplate = function(){
	var that = this;
	var menuButtonOpObj = new MenuButtonOperation();
	var logoutButtonObj = new LogoutButtonOperation();

	this.mainTemplateLoaded = function(doPageSpecificLoads){
		$("#header").load("/ButceTakip/views/common/Header.html",logoutButtonObj.logoutButtonLoaded);

    $("#pageRow").append("<div id='sidebarMenuButtonDiv'></div>");
		$("#pageRow").append("<div id='sidebarMenu' class='col-sm-2 col-md-2'></div>");
		$("#pageRow").append("<div id='pageContent' class='col-sm-10 col-md-10'></div>");

		$('#sidebarMenu').load('/ButceTakip/views/common/SideMenuDiv.html');
		$("#sidebarMenuButtonDiv").load("/ButceTakip/views/common/SideMenuButtonDiv.html",menuButtonOpObj.menuButtonDivLoaded);

		doPageSpecificLoads();
	};

}
