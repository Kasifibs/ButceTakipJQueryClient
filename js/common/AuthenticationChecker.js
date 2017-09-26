var AuthenticationChecker = function(){

  var that = this;
  var utils = new Utils();

  this.checkStatus = function(){
    var restConfig ={
            xhrFields: {withCredentials: true},
            crossDomain: true,
            async:false,
            type:"GET",
            url:utils.getServerBaseURL() + "/oturum/kontrol",
            dataType:"json",
						success: that.checkSuccess,
						error: that.checkFailed
		};

    var request = $.ajax(restConfig);
  };

  this.checkSuccess = function(data){}

  this.checkFailed = function(){
    window.location.replace("/ButceTakip/index.html");
  }
}
