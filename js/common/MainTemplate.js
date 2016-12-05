
var mainTemplateLoaded = function(){
	$('#titleDiv').load('../../views/common/Title.html');
	$('#sideMenuDiv').load('../../views/common/SideMenuDiv.html');
	$('#page-content-wrapper').load('../../views/itemoperations/ItemContentArea.html',function(){itemContentAreaLoaded();});
	
	$("#menu-toggle").click(function(e) {menuToogleClicked(e)});
};

var itemContentAreaLoaded = function(){
	$('#formDiv').load('../../views/itemoperations/ItemForm.html', itemFormLoaded);
};

var menuToogleClicked = function(e){
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
};