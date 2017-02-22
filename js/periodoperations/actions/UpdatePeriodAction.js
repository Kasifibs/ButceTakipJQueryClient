var UpdatePeriodAction = function(){

  this.updatePeriod = function(period, successFunc, failFunc){
		var restConfig ={type:"PUT",
						 url:"https://localhost:8443/ButceTakipServer/period/guncelle",
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
