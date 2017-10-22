var CrudItemQueryPanel = function(){

  var that = this;
  this.crudItemRetrieverObj = new CrudItemRetriever();
  this.utils = new Utils();
  this.queryResultChangedListeners = [];
  this.currentPage = 1;

  this.crudItemQueryPanelLoaded = function(){
    that.loadCrudItemSpecificCriteriasDivSynchronously();
    $('#hideCrudItemQueryPanelButton').click(that.hideCrudItemQueryPanel);
    $('#showCrudItemQueryPanelButton').click(that.showCrudItemQueryPanel);
    $('#crudItemQueryButton').click(that.queryButtonClicked);
    $('#crudItemQueryCleanButton').click(that.cleanButtonClicked);
  }

  this.loadCrudItemSpecificCriteriasDiv = function(){
    alert("Override this function!");
  }

  this.queryButtonClicked = function(){
    alert("Override this function!");
  }

  this.itemRetrieveHandlerOperation = function(queryResultWrapper){
    that.performTableGeneration(queryResultWrapper.itemList);
    that.notifyQueryResultChangedListeners(queryResultWrapper.numberOfItems);
  }

  this.performTableGeneration = function(resultData){
    alert("Override this function!");
  }

  this.hideCrudItemQueryPanel = function(){
    $('.queryFormElement').addClass("hiddenElement");
    $('#showCrudItemQueryPanelButton').removeClass("hiddenElement");
  }

  this.showCrudItemQueryPanel = function(){
    $('.queryFormElement').removeClass("hiddenElement");
    $('#showCrudItemQueryPanelButton').addClass("hiddenElement");
  }

  this.cleanButtonClicked = function(){
    $('#crudItemQueryDiv').empty();

    $.get("/ButceTakip/views/crudcommons/CrudItemQueryPanel.html", function(data){
        $("#crudItemQueryDiv").append(data);
        that.crudItemQueryPanelLoaded();
    });
  }

  this.selectedPageChanged = function(selectedPageNumber){
    that.currentPage = selectedPageNumber;
    that.queryButtonClicked();
  }

  this.addQueryResultChangedListener = function(newQueryResultChangedListener){
    that.queryResultChangedListeners.push(newQueryResultChangedListener);
  }

  this.notifyQueryResultChangedListeners = function(numberOfReturnedItems){
    var queryResultChangedListenersSize = that.queryResultChangedListeners.length;
    for (var i = 0; i < queryResultChangedListenersSize; i++) {
      that.queryResultChangedListeners[i].queryResultChanged(numberOfReturnedItems);
    }
  }

  this.itemListInfoBecameOutdated = function(){
    that.queryButtonClicked();
  }
}
