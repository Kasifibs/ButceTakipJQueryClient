var SaveCrudItemAction = function(){

  this.saveCrudItem = function(serviceUrl, crudItem, successFunc, failFunc){
		var restConfig ={type:"POST",
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
