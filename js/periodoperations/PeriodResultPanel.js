var PeriodResultPanel = function(moneyValuePreparator){

    var that = this;
    var deletePeriodModalObj = new DeletePeriodModal();
    var updatePeriodModalObj = new UpdatePeriodModal(moneyValuePreparator);

  PeriodResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/periodoperations/PeriodResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
  }

  PeriodResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deletePeriodModalObj.deleteCrudItemModalLoaded();
  }

  PeriodResultPanel.prototype.registerForItemDeleteEvent = function(){
    deletePeriodModalObj.addItemDeletedListener(that);
  }

  PeriodResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updatePeriodModalObj.updateCrudItemModalLoaded();
  }

  PeriodResultPanel.prototype.registerForItemUpdateEvent = function(){
    updatePeriodModalObj.addItemUpdatedListener(that);
  }
}
