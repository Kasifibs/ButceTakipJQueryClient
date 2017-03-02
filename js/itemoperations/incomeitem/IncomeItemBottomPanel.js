var IncomeItemBottomPanel = function(){

  var newIncomeItemModalObj = new NewIncomeItemModal();

  IncomeItemBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/incomeitem/IncomeItemBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  IncomeItemBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newIncomeItemModalObj.newCrudItemModalLoaded();
  }
}
