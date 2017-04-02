var ResourceQueryPanel = function(){

  var that = this;

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

  }

  this.retrieveResourceItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/varlikKalemi/liste", that.resourceItemsRetrieved);
  }

  this.resourceItemsRetrieved = function(resultData){
        $.each(resultData, function(i, resourceItem) {
            $('#resourceQueryResourceItemSelect').append('<option value='+resourceItem.id+'>'+resourceItem.name+'</option>');
        });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
        $.each(resultData, function(i, period) {
            $('#resourceQueryPeriodSelect').append('<option value='+period.id+'>'+period.name+'</option>');
        });
  }
}
