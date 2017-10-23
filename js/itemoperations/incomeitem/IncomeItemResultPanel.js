var IncomeItemResultPanel = function(){

    var that = this;
    var deleteIncomeItemModalObj = new DeleteIncomeItemModal();
    var updateIncomeItemModalObj = new UpdateIncomeItemModal();

  IncomeItemResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/incomeitem/IncomeItemResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
  }

  IncomeItemResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteIncomeItemModalObj.deleteCrudItemModalLoaded();
  }

  IncomeItemResultPanel.prototype.registerForItemDeleteEvent = function(){
    deleteIncomeItemModalObj.addItemDeletedListener(that);
  }

  IncomeItemResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateIncomeItemModalObj.updateCrudItemModalLoaded();
  }

  IncomeItemResultPanel.prototype.registerForItemUpdateEvent = function(){
    updateIncomeItemModalObj.addItemUpdatedListener(that);
  }
}
