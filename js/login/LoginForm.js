var LoginForm = function(){
  var that = this;

  this.performLogin = function(){
    var username = $("#usernameTxt").val();
    var password = $("#passwordTxt").val();

    var restConfig ={
            xhrFields: {withCredentials: true},
            crossDomain: true,
            type:"GET",
            url:"https://localhost:8443/ButceTakipServer/oturum/girisYap",
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
    window.location.replace("/ButceTakip/views/itemoperations/ResourceItemOperations.html");
  }

  this.loginFailed = function(){
    $("#loginFailMessage").removeClass("hiddenDiv");
  }
}
