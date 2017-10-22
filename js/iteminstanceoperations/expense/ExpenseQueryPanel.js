var ExpenseQueryPanel = function(moneyValuePreparatorObj){

  var that = this;

  this.moneyValuePreparator = moneyValuePreparatorObj;
  var expenseTableGenerator = new ExpenseTableGenerator();

  ExpenseQueryPanel.prototype.loadCrudItemSpecificCriteriasDivSynchronously = function(){
    $.ajax({
        url: "/ButceTakip/views/iteminstanceoperations/expense/ExpenseQueryPanel.html",
        success: function (data) {
          $("#crudItemSpecificCriteriasDiv").append(data);
        },
        async: false
    });
    that.retrieveExpenseItemsToFillSelectInput();
    that.retrievePeriodsToFillSelectInput();
  }

  ExpenseQueryPanel.prototype.queryButtonClicked = function(){
    var expenseItemId = $('#expenseQueryExpenseItemSelect').find(":selected").val();
    var periodId = $('#expenseQueryPeriodSelect').find(":selected").val();

    var miktarMinInteger =$('#expenseQueryAmountMinIntegerPartTextField').val();
    var miktarMinDecimal =$('#expenseQueryAmountMinDecimalPartTextField').val();

    var miktarMaxInteger =$('#expenseQueryAmountMaxIntegerPartTextField').val();
    var miktarMaxDecimal =$('#expenseQueryAmountMaxDecimalPartTextField').val();

    var queryParams = {"expenseItemId":expenseItemId,
                       "periodId":periodId,
                       "minAmount":that.moneyValuePreparator.prepareMoneyValue(miktarMinInteger, miktarMinDecimal),
                       "maxAmount":that.moneyValuePreparator.prepareMoneyValue(miktarMaxInteger, miktarMaxDecimal)};

     that.crudItemRetrieverObj.retrieveUsingCriteriasWithPagination(that.utils.getServerBaseURL() + "/gider/sorgula", queryParams, that.currentPage, that.itemRetrieveHandlerOperation);
  }

  ExpenseQueryPanel.prototype.performTableGeneration = function(resultData){
    expenseTableGenerator.generateCrudItemTableFromResultData(resultData);
  }

  this.retrieveExpenseItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/harcamaKalemi/liste", that.expenseItemsRetrieved);
  }

  this.expenseItemsRetrieved = function(resultData){
      $('#expenseQueryExpenseItemSelect').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, expenseItem) {
          $('#expenseQueryExpenseItemSelect').append('<option value='+expenseItem.id+'>'+expenseItem.name+'</option>');
      });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
      $('#expenseQueryPeriodSelect').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, period) {
          $('#expenseQueryPeriodSelect').append('<option value='+period.id+'>'+period.name+'</option>');
      });
  }
}
