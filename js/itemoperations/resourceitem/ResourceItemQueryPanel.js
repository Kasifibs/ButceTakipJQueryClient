var ResourceItemQueryPanel = function(){

  var that = this;

  this.resourceItemQueryPanelLoaded = function(){
    $('#hideResourceItemQueryPanelButton').click(that.hideResourceItemQueryPanel);
    $('#showResourceItemQueryPanelButton').click(that.showResourceItemQueryPanel);
    $('#resourceItemQueryButton').click(that.queryButtonClicked);
    $('#resourceItemQueryCleanButton').click(that.cleanButtonClicked);
  }

  this.queryButtonClicked = function(){
    var name = $('#resourceItemNameQueryTextField').val();


    var queryParams = {"name":name};
  }

  this.cleanButtonClicked = function(){
    $('#resourceItemQueryDiv').empty();

    $.get("/ButceTakip/views/itemoperations/resourceItem/ResourceItemQueryPanel.html", function(data){
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
