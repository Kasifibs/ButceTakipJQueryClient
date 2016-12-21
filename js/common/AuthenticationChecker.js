var AuthenticationChecker = function(){

  var that = this;

  this.checkStatus = function(){
    var restConfig ={
            xhrFields: {withCredentials: true},
            crossDomain: true,
            async:false,
            type:"GET",
            url:"https://localhost:8443/ButceTakipServer/oturum/kontrol",
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
