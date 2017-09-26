var LoginForm = function(){
  var that = this;
  var utils = new Utils();

  this.performLogin = function(){
    var username = $("#usernameTxt").val();
    var password = $("#passwordTxt").val();

    var restConfig ={
            xhrFields: {withCredentials: true},
            crossDomain: true,
            type:"GET",
            url:utils.getServerBaseURL() + "/oturum/girisYap",
            headers: {"Authorization": "Basic " + btoa(username + ":" + password)},
            dataType:"json",
						success: that.loginSuccess,
						error: that.loginFailed
		};

    var request = $.ajax(restConfig);
  };

  this.loginFormLoaded = function(){
    $("#loginButton").click(that.performLogin);
  };

  this.loginSuccess = function(data){
    window.location.replace("/ButceTakip/views/itemoperations/resourceitem/ResourceItemOperations.html");
  }

  this.loginFailed = function(){
    $("#loginFailMessage").removeClass("hiddenDiv");
  }
}
