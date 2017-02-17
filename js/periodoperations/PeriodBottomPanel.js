var PeriodBottomPanel = function(){

  var that=this;

  var newPeriodModalObj = new NewPeriodModal();

  this.periodBottomPanelLoaded = function(){
    $.get("/ButceTakip/views/periodoperations/modals/NewPeriodModal.html", function(data){
        $("#newPeriodModalDiv").append(data);
        newPeriodModalObj.newPeriodModalLoaded();
    });
  }
}
