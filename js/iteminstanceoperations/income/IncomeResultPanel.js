var IncomeResultPanel = function(moneyValuePreparatorObj){

  var that = this;
  var deleteIncomeModalObj = new DeleteIncomeModal();
  var updateIncomeModalObj = new UpdateIncomeModal(moneyValuePreparatorObj);

  IncomeResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/iteminstanceoperations/income/IncomeResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
  }

  IncomeResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteIncomeModalObj.deleteCrudItemModalLoaded();
  }

  IncomeResultPanel.prototype.registerForItemDeleteEvent = function(){
    deleteIncomeModalObj.addItemDeletedListener(that);
  }

  IncomeResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateIncomeModalObj.updateCrudItemModalLoaded();
  }

  IncomeResultPanel.prototype.registerForItemUpdateEvent = function(){
    updateIncomeModalObj.addItemUpdatedListener(that);
  }
}
