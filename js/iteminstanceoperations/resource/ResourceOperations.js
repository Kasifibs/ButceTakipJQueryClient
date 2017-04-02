$(document).ready(function() {

      DeleteResourceModal.prototype = new DeleteCrudItemModal();
      DeleteResourceModal.prototype.constructor = DeleteResourceModal;

      ResourceTableGenerator.prototype = new CrudItemTableGenerator();
      ResourceTableGenerator.prototype.constructor = ResourceTableGenerator;

      ResourceQueryPanel.prototype = new CrudItemQueryPanel();
      ResourceQueryPanel.prototype.constructor = ResourceQueryPanel;
      var resourceQueryPanelObj = new ResourceQueryPanel();


      var resourceBottomPanelObj ;

      ResourceResultPanel.prototype = new CrudItemResultPanel();
      ResourceResultPanel.prototype.constructor = ResourceResultPanel;
      var resourceResultPanelObj  = new ResourceResultPanel();

      var crudItemPageLoaderObj = new CrudItemPageLoader(resourceQueryPanelObj, resourceResultPanelObj, resourceBottomPanelObj);
      crudItemPageLoaderObj.loadTemplates();
	}
);
