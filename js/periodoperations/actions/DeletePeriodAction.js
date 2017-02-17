var DeletePeriodAction = function(){

  var that = this;

  this.deletePeriod = function(itemId, successFunc, failFunc){

		var restConfig = {type:"DELETE",
						  url:"https://localhost:8443/ButceTakipServer/period/sil/"+itemId,
						  contentType:"application/json",
							crossDomain: true,
							xhrFields: {withCredentials: true},
							success: successFunc,
 						 	error: failFunc
		};

		var request = $.ajax(restConfig);
	}
}
