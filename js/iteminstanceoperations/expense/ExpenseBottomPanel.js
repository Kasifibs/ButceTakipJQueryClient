var ExpenseBottomPanel = function(moneyValuePreparator){

  var that = this;
  var newExpenseModalObj = new NewExpenseModal(moneyValuePreparator);

  ExpenseBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/iteminstanceoperations/expense/ExpenseBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  ExpenseBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newExpenseModalObj.newCrudItemModalLoaded();
  }

}
