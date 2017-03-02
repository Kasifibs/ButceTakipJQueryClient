var CrudItemQueryPanel = function(){

  var that = this;
  this.crudItemRetrieverObj = new CrudItemRetriever();

  this.crudItemQueryPanelLoaded = function(){
    that.loadCrudItemSpecificCriteriasDiv();
    that.queryButtonClicked();
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
}
