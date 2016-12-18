$(document).ready(function() {


	var mainTemplateObj = new MainTemplate();

	var loadIndexSpecificTemplates = function(){
		$('#page-wrapper').load('/ButceTakip/views/login/LoginForm.html');
	}

	$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){mainTemplateObj.mainTemplateLoaded(loadIndexSpecificTemplates)})


});
