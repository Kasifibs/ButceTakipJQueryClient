var MainTemplateWithoutSidebarMenu = function(){
	var that = this;

	this.mainTemplateLoaded = function(doPageSpecificLoads){
		$.get("/ButceTakip/views/common/NavBarToggle.html", function(data){
		    $("#navPart").append(data);
		});

		$.get("/ButceTakip/views/common/NavBarTop.html", function(data){
		    $("#navPart").append(data);
		});

		doPageSpecificLoads();
	};

}
