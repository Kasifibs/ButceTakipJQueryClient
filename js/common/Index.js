$(document).ready(function() {


	var mainTemplateObj = new MainTemplateWithoutSidebarMenu();
	var loginFormObj = new LoginForm();

	var loadIndexSpecificTemplates = function(){
		$("#pageContent").append("<div id='loginUpperSpace'></div>");
		$.get("/ButceTakip/views/login/LoginForm.html", function(data){
				$("#pageContent").append(data);
				loginFormObj.loginFormLoaded();
				$("#pageContent").append("<div id='loginBottomSpace'></div>");
		});
	}

	$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){mainTemplateObj.mainTemplateLoaded(loadIndexSpecificTemplates)});

});
