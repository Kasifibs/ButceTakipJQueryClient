var CrudItemTableGenerator = function(){

  var that = this;

  this.generateCrudItemTableFromResultData = function(resultData){
    that.cleanOldTableBody();
    var generatedRows = that.generateRowsFromResultData(resultData);
    that.appendRowsToBody(generatedRows);
  }

  this.generateRowsFromResultData = function(resultData){
    alert("Override this function!");
  }

  this.cleanOldTableBody = function(){
    $('#crudItemResultTable tbody').empty();
  }

  this.appendRowsToBody = function(generatedRows){
    $('#crudItemResultTable tbody').append(generatedRows);
  }
}
