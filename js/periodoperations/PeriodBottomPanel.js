var PeriodBottomPanel = function(){

  var newPeriodModalObj = new NewPeriodModal();

  PeriodBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/periodoperations/PeriodBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  PeriodBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newPeriodModalObj.newCrudItemModalLoaded();
  }
}
