var CrudItemResultPanel = function(){

  var that = this;
  this.crudItemRetrieverObj = new CrudItemRetriever();
  this.utils = new Utils();

  this.crudItemResultPanelLoaded = function(){
    that.loadCrudItemSpecificCriteriasDiv();
    that.loadDeleteCrudItemModal();
    that.loadUpdateCrudItemModal();
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
    });
  }

  this.updateCrudItemModalLoaded = function(){
    alert("Override this function! - CrudItemResultPanel.updateCrudItemModalLoaded ");
  }
}
