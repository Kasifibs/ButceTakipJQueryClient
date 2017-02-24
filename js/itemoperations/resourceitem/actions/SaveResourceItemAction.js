var SaveResourceItemAction = function(){

  var that = this;

  this.saveResourceItem = function(resourceItem, successFunc, failFunc){
    var restConfig ={type:"POST",
             url:"https://localhost:8443/ButceTakipServer/varlikKalemi/kaydet",
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
