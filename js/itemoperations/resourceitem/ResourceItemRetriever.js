var ResourceItemRetriever = function(){

  var that = this;

  this.retrieveAllResourceItems = function(resItemRetrieveHandlerOperation){
    $.ajax(
			{
			 xhrFields: {withCredentials: true},
			 crossDomain: true,
			 type:"GET",
			 url:"https://localhost:8443/ButceTakipServer/varlikKalemi/liste",
			 dataType:"json",
			 success:function(resultData){
					resItemRetrieveHandlerOperation(resultData);
				}
			 }
		);
  }

  this.retrieveUsingCriterias = function(queryParameters, resItemRetrieveHandlerOperation){

    $.ajax(
			{
			 xhrFields: {withCredentials: true},
			 crossDomain: true,
			 type:"GET",
			 url:"https://localhost:8443/ButceTakipServer/varlikKalemi/sorgula",
       contentType: 'application/json',
       data:queryParameters,
			 success:function(resultData){
					resItemRetrieveHandlerOperation(resultData);
				}
			 }
		);
  }

  this.retrieveResourceItemById = function(resItemId, resItemRetrieveHandlerOperation){
    $.ajax(
			{
			 xhrFields: {withCredentials: true},
			 crossDomain: true,
			 type:"GET",
			 url:"https://localhost:8443/ButceTakipServer/varlikKalemi/" + resItemId,
       contentType: 'application/json',
			 success:function(resultData){
					resItemRetrieveHandlerOperation(resultData);
				}
			 }
		);
  }
}
