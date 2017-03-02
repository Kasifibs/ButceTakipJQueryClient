var DeleteCrudItemAction = function(){

  this.deleteCrudItem = function(serviceUrl, successFunc, failFunc){

		var restConfig = {type:"DELETE",
						  url:serviceUrl,
						  contentType:"application/json",
							crossDomain: true,
							xhrFields: {withCredentials: true},
							success: successFunc,
 						 	error: failFunc
		};

		var request = $.ajax(restConfig);
	}

}
