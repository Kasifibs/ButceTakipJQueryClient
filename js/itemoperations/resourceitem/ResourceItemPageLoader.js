var ResourceItemPageLoader = function(){

  var that = this;

  var mainTemplateObj = new MainTemplate();
  var resourceItemQueryPanelObj = new ResourceItemQueryPanel();
  var resourceItemResultPanelObj = new ResourceItemResultPanel();

  this.loadTemplates = function(){
		$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){mainTemplateObj.mainTemplateLoaded(that.loadResourceItemOpSpecificTemplates)});
	}

  this.loadResourceItemOpSpecificTemplates = function(){
    $.get("/ButceTakip/views/itemoperations/resourceitem/ResourceItemContentArea.html", function(data){
				$("#pageContent").append(data);
				that.resourceItemContentAreaLoaded();
		});
  }

  this.resourceItemContentAreaLoaded = function(){
    $.get("/ButceTakip/views/itemoperations/resourceitem/ResourceItemQueryPanel.html", function(data){
        $("#resourceItemQueryDiv").append(data);
        resourceItemQueryPanelObj.resourceItemQueryPanelLoaded();
    });

    $.get("/ButceTakip/views/itemoperations/resourceitem/ResourceItemResultPanel.html", function(data){
        $("#resourceItemListDiv").append(data);
        resourceItemResultPanelObj.resourceItemResultPanelLoaded();
    });

  }
}
