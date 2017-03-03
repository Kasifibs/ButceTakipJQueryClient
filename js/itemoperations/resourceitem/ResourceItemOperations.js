$(document).ready(function() {

      NewResourceItemModal.prototype = new NewCrudItemModal();
      NewResourceItemModal.prototype.constructor = NewResourceItemModal;

      DeleteResourceItemModal.prototype = new DeleteCrudItemModal();
      DeleteResourceItemModal.prototype.constructor = DeleteResourceItemModal;

      UpdateResourceItemModal.prototype = new UpdateCrudItemModal();
      UpdateResourceItemModal.prototype.constructor = UpdateResourceItemModal;

      ResourceItemTableGenerator.prototype = new CrudItemTableGenerator();
      ResourceItemTableGenerator.prototype.constructor = ResourceItemTableGenerator;


      ResourceItemQueryPanel.prototype = new CrudItemQueryPanel();
      ResourceItemQueryPanel.prototype.constructor = ResourceItemQueryPanel;
      var resourceItemQueryPanelObj = new ResourceItemQueryPanel();

      ResourceItemBottomPanel.prototype = new CrudItemBottomPanel();
      ResourceItemBottomPanel.prototype.constructor = ResourceItemBottomPanel;
      var resourceItemBottomPanelObj = new ResourceItemBottomPanel();

      ResourceItemResultPanel.prototype = new CrudItemResultPanel();
      ResourceItemResultPanel.prototype.constructor = ResourceItemResultPanel;
      var resourceItemResultPanelObj = new ResourceItemResultPanel();

      var crudItemPageLoaderObj = new CrudItemPageLoader(resourceItemQueryPanelObj, resourceItemResultPanelObj, resourceItemBottomPanelObj);
      crudItemPageLoaderObj.loadTemplates();
	}
);
