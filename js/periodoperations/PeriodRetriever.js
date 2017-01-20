var PeriodRetriever = function(){

  var that = this;

  this.retrieveAllPeriods = function(){
    $.ajax(
			{
			 xhrFields: {withCredentials: true},
			 crossDomain: true,
			 type:"GET",
			 url:"https://localhost:8443/ButceTakipServer/period/liste",
			 dataType:"json",
			 success:function(resultData){
					that.periodRetrieveHandlerOperation(resultData);
				}
			 }
		);
  }

  this.periodRetrieveHandlerOperation = function(resultData){

    $('#periodResultTable tbody').empty();

    $.each(resultData, function(i, obj) {
			var icerik = "<tr>";
			icerik += "<td>" + obj.id + "</td>";
			icerik += "<td>" + obj.beginDate + "</td>";
      icerik += "<td>" + obj.endDate + "</td>";
			icerik += "<td>";
			icerik += "<input type='submit' itemId='"+obj.id+"' class='itemDeleteButton btn btn-danger' value='Sil'>";
			icerik += "</td>";
			icerik += "<td>";
			icerik += "<input type='submit' itemId='"+obj.id+"' class='itemUpdateButton btn btn-warning' value='Güncelle'>";
			icerik += "</td>";
			icerik += "</tr>";

      $('#periodResultTable tbody').append(icerik);
		});

  }
}
