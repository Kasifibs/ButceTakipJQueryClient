var PeriodPageLoader = function(){

  var that = this;

  var mainTemplateObj = new MainTemplate();
  var periodQueryPanelObj = new PeriodQueryPanel();
  var periodRetrieverObj = new PeriodRetriever();

  this.loadTemplates = function(){
		$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){mainTemplateObj.mainTemplateLoaded(that.loadPeriodOpSpecificTemplates)});
	}

  this.loadPeriodOpSpecificTemplates = function(){
    $.get("/ButceTakip/views/periodoperations/PeriodContentArea.html", function(data){
				$("#pageContent").append(data);
				that.periodContentAreaLoaded();
		});
  }

  this.periodContentAreaLoaded = function(){
    $.get("/ButceTakip/views/periodoperations/PeriodQueryPanel.html", function(data){
        $("#periodQueryDiv").append(data);
        periodQueryPanelObj.periodQueryPanelLoaded();
    });

    $.get("/ButceTakip/views/periodoperations/PeriodResultPanel.html", function(data){
        $("#periodListDiv").append(data);
        periodRetrieverObj.retrieveAllPeriods();
    });

    $.get("/ButceTakip/views/periodoperations/PeriodBottomPanel.html", function(data){
        $("#periodBottomDiv").append(data);
    });
  }
}
