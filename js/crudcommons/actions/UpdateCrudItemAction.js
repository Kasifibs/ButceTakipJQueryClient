var UpdateCrudItemAction = function(){

  this.updateCrudItem = function(serviceUrl, crudItem, successFunc, failFunc){
		var restConfig ={type:"PUT",
						 url:serviceUrl,
						 contentType:"application/json",
						 data:JSON.stringify(crudItem),
						 crossDomain: true,
						 xhrFields: {withCredentials: true},
						 success: successFunc,
						 error: failFunc
		};

		var request = $.ajax(restConfig);
  }

}
