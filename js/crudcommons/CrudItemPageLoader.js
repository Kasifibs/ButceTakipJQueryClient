var CrudItemPageLoader = function(crudItemQueryPanel, crudItemResultPanel, crudItemBottomPanel){

  var that = this;

  var mainTemplateObj = new MainTemplate();
  var crudItemQueryPanelObj = crudItemQueryPanel;
  var crudItemResultPanelObj = crudItemResultPanel;
  var crudItemBottomPanelObj = crudItemBottomPanel;

  this.loadTemplates = function(){
		$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){mainTemplateObj.mainTemplateLoaded(that.loadCrudItemContentArea)});
	}

  this.loadCrudItemContentArea = function(){
    $.get("/ButceTakip/views/crudcommons/CrudItemContentArea.html", function(data){
				$("#pageContent").append(data);
				that.crudItemContentAreaLoaded();
		});
  }

  this.crudItemContentAreaLoaded = function(){
    $.get("/ButceTakip/views/crudcommons/CrudItemQueryPanel.html", function(data){
        $("#crudItemQueryDiv").append(data);
        crudItemQueryPanelObj.crudItemQueryPanelLoaded();
    });

    $.get("/ButceTakip/views/crudcommons/CrudItemResultPanel.html", function(data){
        $("#crudItemResultDiv").append(data);
        crudItemResultPanelObj.crudItemResultPanelLoaded();
    });

    $.get("/ButceTakip/views/crudcommons/CrudItemBottomPanel.html", function(data){
        $("#crudItemBottomDiv").append(data);
        crudItemBottomPanelObj.crudItemBottomPanelLoaded();
    });

  }
}
