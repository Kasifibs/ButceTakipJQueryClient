var ResourceQueryPanel = function(moneyValuePreparatorObj){

  var that = this;
  this.moneyValuePreparator = moneyValuePreparatorObj;
  var resourceTableGenerator = new ResourceTableGenerator();

  ResourceQueryPanel.prototype.loadCrudItemSpecificCriteriasDivSynchronously = function(){
    $.ajax({
        url: "/ButceTakip/views/iteminstanceoperations/resource/ResourceQueryPanel.html",
        success: function (data) {
          $("#crudItemSpecificCriteriasDiv").append(data);
        },
        async: false
    });
    that.retrieveResourceItemsToFillSelectInput();
    that.retrievePeriodsToFillSelectInput();
  }

  ResourceQueryPanel.prototype.queryButtonClicked = function(){
    var resourceItemId = $('#resourceQueryResourceItemSelect').find(":selected").val();
    var periodId = $('#resourceQueryPeriodSelect').find(":selected").val();

    var miktarMinInteger =$('#resourceQueryAmountMinIntegerPartTextField').val();
    var miktarMinDecimal =$('#resourceQueryAmountMinDecimalPartTextField').val();

    var miktarMaxInteger =$('#resourceQueryAmountMaxIntegerPartTextField').val();
    var miktarMaxDecimal =$('#resourceQueryAmountMaxDecimalPartTextField').val();

    var queryParams = {"resourceItemId":resourceItemId,
                       "periodId":periodId,
                       "minAmount":that.moneyValuePreparator.prepareMoneyValue(miktarMinInteger, miktarMinDecimal),
                       "maxAmount":that.moneyValuePreparator.prepareMoneyValue(miktarMaxInteger, miktarMaxDecimal)};

     that.crudItemRetrieverObj.retrieveUsingCriteriasWithPagination(that.utils.getServerBaseURL() + "/varlik/sorgula", queryParams, that.currentPage, that.itemRetrieveHandlerOperation);
  }

  ResourceQueryPanel.prototype.performTableGeneration = function(resultData){
    resourceTableGenerator.generateCrudItemTableFromResultData(resultData);
  }

  this.retrieveResourceItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/varlikKalemi/liste", that.resourceItemsRetrieved);
  }

  this.resourceItemsRetrieved = function(resultData){
      $('#resourceQueryResourceItemSelect').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, resourceItem) {
          $('#resourceQueryResourceItemSelect').append('<option value='+resourceItem.id+'>'+resourceItem.name+'</option>');
      });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
      $('#resourceQueryPeriodSelect').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, period) {
          $('#resourceQueryPeriodSelect').append('<option value='+period.id+'>'+period.name+'</option>');
      });
  }
}
