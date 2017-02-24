var ResourceItemQueryPanel = function(){

  var that = this;
  var resourceItemRetrieverObj = new ResourceItemRetriever();
  var resourceItemTableGeneratorObj = new ResourceItemTableGenerator();

  this.resourceItemQueryPanelLoaded = function(){
    $('#hideResourceItemQueryPanelButton').click(that.hideResourceItemQueryPanel);
    $('#showResourceItemQueryPanelButton').click(that.showResourceItemQueryPanel);
    $('#resourceItemQueryButton').click(that.queryButtonClicked);
    $('#resourceItemQueryCleanButton').click(that.cleanButtonClicked);
  }

  this.queryButtonClicked = function(){
    var name = $('#resourceItemNameQueryTextField').val();

    var queryParams = {"name":name};

    var resItemRetrieveHandlerOperation = resourceItemTableGeneratorObj.generateResourceItemTableFromResultData;
    resourceItemRetrieverObj.retrieveUsingCriterias(queryParams, resItemRetrieveHandlerOperation);
  }

  this.cleanButtonClicked = function(){
    $('#resourceItemQueryDiv').empty();

    $.get("/ButceTakip/views/itemoperations/resourceitem/ResourceItemQueryPanel.html", function(data){
        $("#resourceItemQueryDiv").append(data);
        that.resourceItemQueryPanelLoaded();
    });
  }

  this.hideResourceItemQueryPanel = function(){
    $('.queryFormElement').addClass("hiddenElement");
    $('#showResourceItemQueryPanelButton').removeClass("hiddenElement");
  }

  this.showResourceItemQueryPanel = function(){
    $('.queryFormElement').removeClass("hiddenElement");
    $('#showResourceItemQueryPanelButton').addClass("hiddenElement");
  }
}
