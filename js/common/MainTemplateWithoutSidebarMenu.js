var MainTemplateWithoutSidebarMenu = function(){
	var that = this;

	this.mainTemplateLoaded = function(doPageSpecificLoads){

		$("#header").load("/ButceTakip/views/common/Header.html");
		$("#pageRow").append("<div id='pageContent' class='col-md-12'></div>");

		doPageSpecificLoads();
	};

}
