var LogoutButtonOperation = function(){
  var that = this;
  var utils = new Utils();

  this.logoutButtonLoaded = function(){
    $("#logoutButton").click(that.logoutButtonClicked);
  };

  this.logoutButtonClicked = function(){
    var restConfig ={
            xhrFields: {withCredentials: true},
            crossDomain: true,
            async:false,
            type:"GET",
            url:utils.getServerBaseURL() + "/oturum/oturumKapat",
            dataType:"json",
						success: that.logoutSuccess
		};

    var request = $.ajax(restConfig);
  };

  this.logoutSuccess = function(data){
      window.location.replace("/ButceTakip/index.html");
  };
}
