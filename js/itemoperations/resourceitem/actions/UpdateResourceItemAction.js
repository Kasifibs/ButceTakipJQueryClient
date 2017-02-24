var UpdateResourceItemAction = function(){

  this.updateResourceItem = function(resourceItem, successFunc, failFunc){
		var restConfig ={type:"PUT",
						 url:"https://localhost:8443/ButceTakipServer/varlikKalemi/guncelle",
						 contentType:"application/json",
						 data:JSON.stringify(resourceItem),
						 crossDomain: true,
						 xhrFields: {withCredentials: true},
						 success: successFunc,
						 error: failFunc
		};

		var request = $.ajax(restConfig);
  }
}
