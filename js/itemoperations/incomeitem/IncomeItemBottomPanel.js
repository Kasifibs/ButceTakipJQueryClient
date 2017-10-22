var IncomeItemBottomPanel = function(){

  var that = this;
  var newIncomeItemModalObj = new NewIncomeItemModal();

  IncomeItemBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/incomeitem/IncomeItemBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  IncomeItemBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newIncomeItemModalObj.newCrudItemModalLoaded();
  }

  IncomeItemBottomPanel.prototype.registerForItemAdditionEvent = function(){
    newIncomeItemModalObj.addNewItemAddedListeners(that);
  }
}
