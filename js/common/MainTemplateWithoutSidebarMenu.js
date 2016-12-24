var MainTemplateWithoutSidebarMenu = function(){
	var that = this;

	this.mainTemplateLoaded = function(doPageSpecificLoads){

		$("#pageRow").append("<div id='pageContent' class='col-md-12'></div>");

		doPageSpecificLoads();
	};

}
