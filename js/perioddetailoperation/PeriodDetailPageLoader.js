var PeriodDetailPageLoader = function(periodDetailInformationArea, periodResourcesArea){

  var that = this;

  this.mainTemplateObj = new MainTemplate();
  this.periodDetailInformationAreaObj = periodDetailInformationArea;
  this.periodResourcesAreaObj = periodResourcesArea;


  this.loadTemplates = function(){
		$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){that.mainTemplateObj.mainTemplateLoaded(that.loadPeriodDetail)});
	}

  this.loadPeriodDetail = function(){
    $.get("/ButceTakip/views/perioddetailoperation/PeriodDetail.html", function(data){
       $("#pageContent").append(data);
       that.periodDetailLoaded();
    });
  }

  this.periodDetailLoaded = function(){
    $.get("/ButceTakip/views/perioddetailoperation/PeriodDetailInformationArea.html", function(data){
       $("#periodDetailInformationArea").append(data);
       that.periodDetailInformationAreaObj.detailInformationAreaLoaded();
    });

    $.get("/ButceTakip/views/perioddetailoperation/PeriodResourcesArea.html", function(data){
       $("#periodResourcesArea").append(data);
        that.periodResourcesAreaObj.resourcesAreaLoaded();
    });
  }
}
