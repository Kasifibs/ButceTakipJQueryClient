var CrudItemBottomPanel = function(){

  var that = this;
  this.itemListChangedListeners = [];

  this.crudItemBottomPanelLoaded = function(){
    that.loadCrudItemSpecificCriteriasDiv();
    that.loadNewCrudItemModal();
  }

  this.loadCrudItemSpecificCriteriasDiv = function(){
    alert("Override this function!");
  }

  this.loadNewCrudItemModal = function(){
    $.get("/ButceTakip/views/crudcommons/modals/NewCrudItemModal.html", function(data){
        $("#newCrudItemModalDiv").append(data);
        that.newCrudItemModalLoaded();
        that.registerForItemAdditionEvent();
    });
  }

  this.newCrudItemModalLoaded = function(){
    alert("Override this function! - CrudItemBottomPanel.newCrudItemModalLoaded ");
  }

  this.registerForItemAdditionEvent = function(){
    alert("Override this function! - CrudItemBottomPanel.registerForItemAdditionEvent ");
  }

  this.addItemListChangedListener = function(newItemListChangelistener){
    that.itemListChangedListeners.push(newItemListChangelistener);
  }

  this.notifyItemListChangedListeners = function(){
    var itemListChangedListenersSize = that.itemListChangedListeners.length;
    for (var i = 0; i < itemListChangedListenersSize; i++) {
      that.itemListChangedListeners[i].itemListInfoBecameOutdated();
    }
  }

  this.newItemAdded = function(){
    that.notifyItemListChangedListeners();
  }
}
