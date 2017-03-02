var CrudItemBottomPanel = function(){

  var that = this;

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
    });
  }

  this.newCrudItemModalLoaded = function(){
    alert("Override this function! - CrudItemBottomPanel.newCrudItemModalLoaded ");
  }
}
