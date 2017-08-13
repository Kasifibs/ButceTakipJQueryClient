var PeriodDetailInformationArea = function(selectedPeriodId, crudItemRetriever){

   var that = this;
   this.periodId = selectedPeriodId;
   this.crudItemRetrieverObj = crudItemRetriever;

   this.retrieveAndBindPeriodData = function(){
     that.crudItemRetrieverObj.retrieveCrudItemById("https://localhost:8443/ButceTakipServer/period/", that.periodId, that.periodDataRetrieved);
   }

   this.periodDataRetrieved = function(retrievedPeriod){
     var beginAmount = retrievedPeriod.beginAmount + "";
     var amountParts = beginAmount.split('.');
     if(amountParts[1] === undefined){
      amountParts[1] = '00';
     }

     $("#periodDetailNameTextField").text(retrievedPeriod.name);
     $("#periodDetailBeginDatePicker").text(moment(retrievedPeriod.beginDate).format('DD.MM.YYYY'));
     $("#periodDetailEndDatePicker").text(moment(retrievedPeriod.endDate).format('DD.MM.YYYY'));
     $("#periodDetailBeginAmountTextField").text(amountParts[0] + ',' + amountParts[1]);

   }

   this.detailInformationAreaLoaded = function(){
      that.retrieveAndBindPeriodData();
   }

}
