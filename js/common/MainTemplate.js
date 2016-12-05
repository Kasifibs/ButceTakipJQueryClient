var MainTemplate = function(){
	this.mainTemplateLoaded = function(doPageSpecificLoads){
		$('#titleDiv').load('/ButceTakip/views/common/Title.html');
		$('#sideMenuDiv').load('/ButceTakip/views/common/SideMenuDiv.html');
		$("#menu-toggle").click(function(e) {menuToogleClicked(e)});
		doPageSpecificLoads();
	};

	this.menuToogleClicked = function(e){
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	};
}