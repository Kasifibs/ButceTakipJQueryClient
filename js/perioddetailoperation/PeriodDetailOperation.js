$(document).ready(function() {

      var url_string = location.href;
      var url = new URL(url_string);
      var id = url.searchParams.get("id");

      var crudItemRetrieverObj = new CrudItemRetriever();

      var periodDetailPanelObj = new PeriodDetailPanel(id, crudItemRetrieverObj);
      var periodResourcesAreaObj = new PeriodResourcesArea(id, crudItemRetrieverObj);

      var periodDetailPageLoaderObj = new PeriodDetailPageLoader(periodDetailPanelObj, periodResourcesAreaObj);
      periodDetailPageLoaderObj.loadTemplates();
	}
);
