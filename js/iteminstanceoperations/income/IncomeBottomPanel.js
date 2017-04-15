var IncomeBottomPanel = function(moneyValuePreparator){

  var that = this;
  var newIncomeModalObj = new NewIncomeModal(moneyValuePreparator);

  IncomeBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/iteminstanceoperations/income/IncomeBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  IncomeBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newIncomeModalObj.newCrudItemModalLoaded();
  }

}
