var MainTemplate = function(){
	var that = this;

	this.menuToogleClicked = function(e){
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	};
	
	this.mainTemplateLoaded = function(doPageSpecificLoads){
		$('#titleDiv').load('/ButceTakip/views/common/Title.html');
		$('#sideMenuDiv').load('/ButceTakip/views/common/SideMenuDiv.html');
		$("#menu-toggle").click(function(e) {that.menuToogleClicked(e)});
		doPageSpecificLoads();
	};

}