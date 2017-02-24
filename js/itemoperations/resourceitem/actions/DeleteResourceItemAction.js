var DeleteResourceItemAction = function(){

  var that = this;

  this.deleteResourceItem = function(itemId, successFunc, failFunc){

		var restConfig = {type:"DELETE",
						  url:"https://localhost:8443/ButceTakipServer/varlikKalemi/sil/"+itemId,
						  contentType:"application/json",
							crossDomain: true,
							xhrFields: {withCredentials: true},
							success: successFunc,
 						 	error: failFunc
		};

		var request = $.ajax(restConfig);
	}
}
