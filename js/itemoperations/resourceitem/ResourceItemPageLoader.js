var ResourceItemPageLoader = function(){

  var that = this;

  var mainTemplateObj = new MainTemplate();

  this.loadTemplates = function(){
		$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){mainTemplateObj.mainTemplateLoaded(that.loadResourceItemOpSpecificTemplates)});
	}

  this.loadResourceItemOpSpecificTemplates = function(){
    $.get("/ButceTakip/views/itemoperations/resourceItem/ResourceItemContentArea.html", function(data){
				$("#pageContent").append(data);
				that.resourceItemContentAreaLoaded();
		});
  }

  this.resourceItemContentAreaLoaded = function(){
    
  }
}
