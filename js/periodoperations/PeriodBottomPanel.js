var PeriodBottomPanel = function(moneyValuePreparator){

  var that = this;
  var newPeriodModalObj = new NewPeriodModal(moneyValuePreparator);

  PeriodBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/periodoperations/PeriodBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  PeriodBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newPeriodModalObj.newCrudItemModalLoaded();
  }

  PeriodBottomPanel.prototype.registerForItemAdditionEvent = function(){
    newPeriodModalObj.addNewItemAddedListeners(that);
  }
}
