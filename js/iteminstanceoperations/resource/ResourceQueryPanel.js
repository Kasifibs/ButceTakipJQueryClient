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

     var resourceRetrieveHandlerOperation = resourceTableGenerator.generateCrudItemTableFromResultData;
     that.crudItemRetrieverObj.retrieveUsingCriterias("https://localhost:8443/ButceTakipServer/varlik/sorgula", queryParams, resourceRetrieveHandlerOperation);
  }

  this.retrieveResourceItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/varlikKalemi/liste", that.resourceItemsRetrieved);
  }

  this.resourceItemsRetrieved = function(resultData){
      $('#resourceQueryResourceItemSelect').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, resourceItem) {
          $('#resourceQueryResourceItemSelect').append('<option value='+resourceItem.id+'>'+resourceItem.name+'</option>');
      });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
      $('#resourceQueryPeriodSelect').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, period) {
          $('#resourceQueryPeriodSelect').append('<option value='+period.id+'>'+period.name+'</option>');
      });
  }
}
