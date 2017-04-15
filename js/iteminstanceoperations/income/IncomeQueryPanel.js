var IncomeQueryPanel = function(moneyValuePreparatorObj){

  var that = this;

  this.moneyValuePreparator = moneyValuePreparatorObj;
  var incomeTableGenerator = new IncomeTableGenerator();

  IncomeQueryPanel.prototype.loadCrudItemSpecificCriteriasDivSynchronously = function(){
    $.ajax({
        url: "/ButceTakip/views/iteminstanceoperations/income/IncomeQueryPanel.html",
        success: function (data) {
          $("#crudItemSpecificCriteriasDiv").append(data);
        },
        async: false
    });
    that.retrieveIncomeItemsToFillSelectInput();
    that.retrievePeriodsToFillSelectInput();
  }

  IncomeQueryPanel.prototype.queryButtonClicked = function(){
    var incomeItemId = $('#incomeQueryIncomeItemSelect').find(":selected").val();
    var periodId = $('#incomeQueryPeriodSelect').find(":selected").val();

    var miktarMinInteger =$('#incomeQueryAmountMinIntegerPartTextField').val();
    var miktarMinDecimal =$('#incomeQueryAmountMinDecimalPartTextField').val();

    var miktarMaxInteger =$('#incomeQueryAmountMaxIntegerPartTextField').val();
    var miktarMaxDecimal =$('#incomeQueryAmountMaxDecimalPartTextField').val();

    var queryParams = {"incomeItemId":incomeItemId,
                       "periodId":periodId,
                       "minAmount":that.moneyValuePreparator.prepareMoneyValue(miktarMinInteger, miktarMinDecimal),
                       "maxAmount":that.moneyValuePreparator.prepareMoneyValue(miktarMaxInteger, miktarMaxDecimal)};

     var incomeRetrieveHandlerOperation = incomeTableGenerator.generateCrudItemTableFromResultData;
     that.crudItemRetrieverObj.retrieveUsingCriterias("https://localhost:8443/ButceTakipServer/gelir/sorgula", queryParams, incomeRetrieveHandlerOperation);
  }

  this.retrieveIncomeItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/gelirKalemi/liste", that.incomeItemsRetrieved);
  }

  this.incomeItemsRetrieved = function(resultData){
      $('#incomeQueryIncomeItemSelect').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, incomeItem) {
          $('#incomeQueryIncomeItemSelect').append('<option value='+incomeItem.id+'>'+incomeItem.name+'</option>');
      });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
      $('#incomeQueryPeriodSelect').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, period) {
          $('#incomeQueryPeriodSelect').append('<option value='+period.id+'>'+period.name+'</option>');
      });
  }
}
