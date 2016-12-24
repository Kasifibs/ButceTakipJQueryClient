var MenuButtonOperation = function(){
  var that = this;
  var clickedAlready = false;

  this.menuButtonDivLoaded = function(){
    $("#menuButton").click(that.menuButtonClicked);
  };

  this.menuButtonClicked = function(){
    if(!clickedAlready){
      $('#sidebarMenu').show()
      clickedAlready = true;
    }else{
      $('#sidebarMenu').hide();
      clickedAlready = false;
    }
  };
}
