var PeriodDetailPageLoader = function(periodDetailInformationArea, periodResourcesArea, periodIncomesArea, periodExpensesArea){

  var that = this;

  this.mainTemplateObj = new MainTemplate();
  this.periodDetailInformationAreaObj = periodDetailInformationArea;
  this.periodResourcesAreaObj = periodResourcesArea;
  this.periodIncomesAreaObj = periodIncomesArea;
  this.periodExpensesAreaObj = periodExpensesArea;


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

    $.get("/ButceTakip/views/perioddetailoperation/PeriodIncomesArea.html", function(data){
       $("#periodIncomesArea").append(data);
        that.periodIncomesAreaObj.incomesAreaLoaded();
    });

    $.get("/ButceTakip/views/perioddetailoperation/PeriodExpensesArea.html", function(data){
       $("#periodExpensesArea").append(data);
        that.periodExpensesAreaObj.expensesAreaLoaded();
    });
  }
}
