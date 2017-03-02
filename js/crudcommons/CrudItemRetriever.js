var CrudItemRetriever = function(){

  this.retrieveAllCrudItems = function(serviceUrl, crudItemRetrieveHandlerOperation){
    $.ajax(
			{
			 xhrFields: {withCredentials: true},
			 crossDomain: true,
			 type:"GET",
			 url:serviceUrl,
			 dataType:"json",
			 success:function(resultData){
					crudItemRetrieveHandlerOperation(resultData);
				}
			 }
		);
  }

  this.retrieveUsingCriterias = function(serviceUrl, queryParameters, crudItemRetrieveHandlerOperation){
    $.ajax(
			{
			 xhrFields: {withCredentials: true},
			 crossDomain: true,
			 type:"GET",
			 url:serviceUrl,
       contentType: 'application/json',
       data:queryParameters,
			 success:function(resultData){
					crudItemRetrieveHandlerOperation(resultData);
				}
			 }
		);
  }

  this.retrieveCrudItemById = function(serviceUrl, crudItemId, crudItemRetrieveHandlerOperation){
    $.ajax(
      {
       xhrFields: {withCredentials: true},
       crossDomain: true,
       type:"GET",
       url:serviceUrl + crudItemId,
       contentType: 'application/json',
       success:function(resultData){
          crudItemRetrieveHandlerOperation(resultData);
        }
       }
    );
  }
}
