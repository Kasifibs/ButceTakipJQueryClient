$(document).ready(function() {

      var moneyValuePreparator = new MoneyValuePreparator();

      NewResourceModal.prototype = new NewCrudItemModal();
      NewResourceModal.prototype.constructor = NewResourceModal;

      DeleteResourceModal.prototype = new DeleteCrudItemModal();
      DeleteResourceModal.prototype.constructor = DeleteResourceModal;

      UpdateResourceModal.prototype = new UpdateCrudItemModal();
      UpdateResourceModal.prototype.constructor = UpdateResourceModal;

      ResourceTableGenerator.prototype = new CrudItemTableGenerator();
      ResourceTableGenerator.prototype.constructor = ResourceTableGenerator;

      ResourceQueryPanel.prototype = new CrudItemQueryPanel();
      ResourceQueryPanel.prototype.constructor = ResourceQueryPanel;
      var resourceQueryPanelObj = new ResourceQueryPanel(moneyValuePreparator);

      ResourceBottomPanel.prototype = new CrudItemBottomPanel();
      ResourceBottomPanel.prototype.constructor = ResourceBottomPanel;
      var resourceBottomPanelObj = new ResourceBottomPanel(moneyValuePreparator);

      ResourceResultPanel.prototype = new CrudItemResultPanel();
      ResourceResultPanel.prototype.constructor = ResourceResultPanel;
      var resourceResultPanelObj  = new ResourceResultPanel(moneyValuePreparator);

      var crudItemPageLoaderObj = new CrudItemPageLoader(resourceQueryPanelObj, resourceResultPanelObj, resourceBottomPanelObj);
      crudItemPageLoaderObj.loadTemplates();
	}
);
