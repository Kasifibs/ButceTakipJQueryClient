$(document).ready(function() {

      var url_string = location.href;
      var url = new URL(url_string);
      var id = url.searchParams.get("id");

      var crudItemRetrieverObj = new CrudItemRetriever();

      var periodDetailInformationAreaObj = new PeriodDetailInformationArea(id, crudItemRetrieverObj);
      var periodResourcesAreaObj = new PeriodResourcesArea(id, crudItemRetrieverObj);
      var periodIncomesAreaObj = new PeriodIncomesArea(id, crudItemRetrieverObj);
      var periodExpensesAreaObj = new PeriodExpensesArea(id, crudItemRetrieverObj);

      var periodDetailPageLoaderObj = new PeriodDetailPageLoader(periodDetailInformationAreaObj, periodResourcesAreaObj, periodIncomesAreaObj, periodExpensesAreaObj);
      periodDetailPageLoaderObj.loadTemplates();
	}
);
