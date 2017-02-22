var PeriodRetriever = function(){

  var that = this;

  this.retrieveAllPeriods = function(periodRetrieveHandlerOperation){
    $.ajax(
			{
			 xhrFields: {withCredentials: true},
			 crossDomain: true,
			 type:"GET",
			 url:"https://localhost:8443/ButceTakipServer/period/liste",
			 dataType:"json",
			 success:function(resultData){
					periodRetrieveHandlerOperation(resultData);
				}
			 }
		);
  }

  this.retrieveUsingCriterias = function(queryParameters, periodRetrieveHandlerOperation){

    $.ajax(
			{
			 xhrFields: {withCredentials: true},
			 crossDomain: true,
			 type:"GET",
			 url:"https://localhost:8443/ButceTakipServer/period/sorgula",
       contentType: 'application/json',
       data:queryParameters,
			 success:function(resultData){
					periodRetrieveHandlerOperation(resultData);
				}
			 }
		);
  }

  this.retrievePeriodById = function(periodId, periodRetrieveHandlerOperation){
    $.ajax(
			{
			 xhrFields: {withCredentials: true},
			 crossDomain: true,
			 type:"GET",
			 url:"https://localhost:8443/ButceTakipServer/period/" + periodId,
       contentType: 'application/json',
			 success:function(resultData){
					periodRetrieveHandlerOperation(resultData);
				}
			 }
		);
  }
}
