var CrudItemResultPanel = function(){

  var that = this;
  this.utils = new Utils();
  this.pageChangeListeners = [];
  this.itemListChangedListeners = [];

  this.crudItemResultPanelLoaded = function(){
    that.loadCrudItemSpecificCriteriasDiv();
    that.loadDeleteCrudItemModal();
    that.loadUpdateCrudItemModal();
    that.initializePagination();
  }

  this.loadCrudItemSpecificCriteriasDiv = function(){
    alert("Override this function!");
  }

  this.loadDeleteCrudItemModal = function(){
    $.get("/ButceTakip/views/crudcommons/modals/DeleteCrudItemModal.html", function(data){
        $("#deleteCrudItemModalDiv").append(data);
        that.deleteCrudItemModalLoaded();
    });
  }

  this.deleteCrudItemModalLoaded = function(){
    alert("Override this function! - CrudItemResultPanel.deleteCrudItemModalLoaded ");
  }

  this.loadUpdateCrudItemModal = function(){
    $.get("/ButceTakip/views/crudcommons/modals/UpdateCrudItemModal.html", function(data){
        $("#updateCrudItemModalDiv").append(data);
        that.updateCrudItemModalLoaded();
        that.registerForItemUpdateEvent();
    });
  }

  this.updateCrudItemModalLoaded = function(){
    alert("Override this function! - CrudItemResultPanel.updateCrudItemModalLoaded ");
  }

  this.registerForItemUpdateEvent = function(){
    alert("Override this function! - CrudItemResultPanel.registerForItemUpdateEvent ");
  }

  this.initializePagination = function(){
    $('#tablePaginationDiv').pagination({
        items: 15,
        itemsOnPage: that.utils.getQueryPageSize(),
        cssStyle: 'light-theme',
        onPageClick: that.notifyPageListenersAboutChange,
        prevText: 'Önceki',
        nextText: 'Sonraki'
    });
  }

  this.addPageChangeListener = function(newPageChangeListener){
    that.pageChangeListeners.push(newPageChangeListener);
  }

  this.notifyPageListenersAboutChange = function(selectedPageNumber, anEvent){
    var pageChangeListenersSize = that.pageChangeListeners.length;
    for (var i = 0; i < pageChangeListenersSize; i++) {
      that.pageChangeListeners[i].selectedPageChanged(selectedPageNumber);
    }
  }

  this.queryResultChanged = function(numberOfReturnedItems){
    $('#tablePaginationDiv').pagination('updateItems', numberOfReturnedItems);
  }

  this.addItemListChangedListener = function(newItemListChangedListener){
    that.itemListChangedListeners.push(newItemListChangedListener);
  }

  this.notifyItemChangedListeners = function(){
    var itemListChangedListenersSize = that.itemListChangedListeners.length;
    for (var i = 0; i < itemListChangedListenersSize; i++) {
      that.itemListChangedListeners[i].itemListInfoBecameOutdated();
    }
  }

  this.itemUpdated = function(){
    that.notifyItemChangedListeners();
  }
}
