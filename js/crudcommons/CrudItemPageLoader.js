var CrudItemPageLoader = function(crudItemQueryPanel, crudItemResultPanel, crudItemBottomPanel){

  var that = this;

  var mainTemplateObj = new MainTemplate();
  var crudItemQueryPanelObj = crudItemQueryPanel;
  var crudItemResultPanelObj = crudItemResultPanel;
  var crudItemBottomPanelObj = crudItemBottomPanel;

  crudItemResultPanelObj.addPageChangeListener(crudItemQueryPanelObj);
  crudItemQueryPanelObj.addQueryResultChangedListener(crudItemResultPanelObj);
  crudItemBottomPanelObj.addItemListChangedListener(crudItemQueryPanelObj);
  crudItemResultPanelObj.addItemListChangedListener(crudItemQueryPanelObj);

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
    that.loadCrudItemQueryPanel();
    that.loadCrudItemResultPanel();
    that.loadCrudItemBottomPanel();

    crudItemQueryPanelObj.queryButtonClicked();
  }

  this.loadCrudItemQueryPanel = function(){
    $.ajax({
        url: "/ButceTakip/views/crudcommons/CrudItemQueryPanel.html",
        success: function (data) {
          $("#crudItemQueryDiv").append(data);
          crudItemQueryPanelObj.crudItemQueryPanelLoaded();
        },
        async: false
    });
  }

  this.loadCrudItemResultPanel = function(){
    $.ajax({
        url: "/ButceTakip/views/crudcommons/CrudItemResultPanel.html",
        success: function (data) {
          $("#crudItemResultDiv").append(data);
          crudItemResultPanelObj.crudItemResultPanelLoaded();
        },
        async: false
    });
  }

  this.loadCrudItemBottomPanel = function(){
    $.ajax({
        url: "/ButceTakip/views/crudcommons/CrudItemBottomPanel.html",
        success: function (data) {
          $("#crudItemBottomDiv").append(data);
          crudItemBottomPanelObj.crudItemBottomPanelLoaded();
        },
        async: false
    });
  }
}
