var SavePeriodAction = function(){

  var that = this;

  this.savePeriod = function(period, successFunc, failFunc){
		var restConfig ={type:"POST",
						 url:"https://localhost:8443/ButceTakipServer/period/kaydet",
						 contentType:"application/json",
						 data:JSON.stringify(period),
						 crossDomain: true,
						 xhrFields: {withCredentials: true},
						 success: successFunc,
						 error: failFunc
		};

		var request = $.ajax(restConfig);
  }

}
