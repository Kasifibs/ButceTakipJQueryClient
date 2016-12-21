$(document).ready(function() {


	var mainTemplateObj = new MainTemplateWithoutSidebarMenu();
	var loginFormObj = new LoginForm();

	var loadIndexSpecificTemplates = function(){
		$('#page-wrapper').load('/ButceTakip/views/login/LoginForm.html', loginFormObj.loginFormLoaded);
	}

	$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){mainTemplateObj.mainTemplateLoaded(loadIndexSpecificTemplates)});

});
