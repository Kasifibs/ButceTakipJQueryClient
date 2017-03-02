var NewCrudItemModal = function(){

  var that = this;
  this.saveCounter = 0;
  this.crudItemRetrieverObj = new CrudItemRetriever();
  this.saveCrudItemActionObj = new SaveCrudItemAction();

  this.newCrudItemModalLoaded = function(){
    $("#saveNewCrudItemActionButton").click(that.saveCrudItem);

    $.get(that.getItemTypeSpecificFormUrl(), function(data){
        $("#crudItemSpecificFormDiv").append(data);
    });

    $('#newCrudItemModal').on('show.bs.modal', function (event) {
      var modal = $(this);
      var modalTitleText = that.getSaveModalTitleText();
      modal.find('#newCrudItemModalTitle').text(modalTitleText);
    })

  }

  this.getItemTypeSpecificFormUrl = function(){
    alert("Override this function-NewCrudItemModal.getItemTypeSpecificFormUrl");
  }

  this.saveCrudItem = function(){
    alert("Override this function-NewCrudItemModal.saveCrudItem");
  }

  this.getSaveModalTitleText = function(){
    alert("Override this function-NewCrudItemModal.getSaveModalTitleText");
  }

  this.getSaveSuccessMessage = function(){
    alert("Override this function-NewCrudItemModal.getSaveSuccessMessage");
  }

  this.retrieveItemsToUpdateScreen = function(){
    alert("Override this function! - NewCrudItemModal.retrieveItemsToUpdateScreen");
  }

  this.saveSuccess = function(){
    $("#newCrudItemModal").modal("hide");
    that.saveCounter = that.saveCounter + 1;
    
    $.get("/ButceTakip/views/crudcommons/alerts/SaveSuccessAlert.html", function(data){
        $("#resultMessageShowingDiv").append(data);
        $("#specificSaveAlertText").append("<strong>"+that.getSaveSuccessMessage()+"</strong>");
        $('#specificSaveAlertText').attr('id','specificSaveAlertText'+that.saveCounter);
    });

    that.retrieveItemsToUpdateScreen();
  };

  this.saveFail = function(){};
}
