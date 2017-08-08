var PeriodDetailPageLoader = function(periodDetailPanel, periodResourcesArea){

  var that = this;

  this.mainTemplateObj = new MainTemplate();
  this.periodDetailPanelObj = periodDetailPanel;
  this.periodResourcesAreaObj = periodResourcesArea;


  this.loadTemplates = function(){
		$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){that.mainTemplateObj.mainTemplateLoaded(that.loadPeriodDetailPanelArea)});
	}

  this.loadPeriodDetailPanelArea = function(){
    $.get("/ButceTakip/views/perioddetailoperation/PeriodDetailPanel.html", function(data){
       $("#pageContent").append(data);
       that.periodDetailPanelObj.detailPanelLoaded();
       that.loadPeriodResourcesArea();
    });
  }

  this.loadPeriodResourcesArea = function(){
    $.get("/ButceTakip/views/perioddetailoperation/PeriodResourcesArea.html", function(data){
       $("#pageContent").append(data);
        that.periodResourcesAreaObj.resourcesAreaLoaded();
    });
  }
}
