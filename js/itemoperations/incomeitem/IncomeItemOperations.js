$(document).ready(function() {

      NewIncomeItemModal.prototype = new NewCrudItemModal();
      NewIncomeItemModal.prototype.constructor = NewIncomeItemModal;

      DeleteIncomeItemModal.prototype = new DeleteCrudItemModal();
      DeleteIncomeItemModal.prototype.constructor = DeleteIncomeItemModal;

      UpdateIncomeItemModal.prototype = new UpdateCrudItemModal();
      UpdateIncomeItemModal.prototype.constructor = UpdateIncomeItemModal;

      IncomeItemTableGenerator.prototype = new CrudItemTableGenerator();
      IncomeItemTableGenerator.prototype.constructor = IncomeItemTableGenerator;


      IncomeItemQueryPanel.prototype = new CrudItemQueryPanel();
      IncomeItemQueryPanel.prototype.constructor = IncomeItemQueryPanel;
      var incomeItemQueryPanelObj = new IncomeItemQueryPanel();

      IncomeItemBottomPanel.prototype = new CrudItemBottomPanel();
      IncomeItemBottomPanel.prototype.constructor = IncomeItemBottomPanel;
      var incomeItemBottomPanelObj = new IncomeItemBottomPanel();

      IncomeItemResultPanel.prototype = new CrudItemResultPanel();
      IncomeItemResultPanel.prototype.constructor = IncomeItemResultPanel;
      var incomeItemResultPanelObj = new IncomeItemResultPanel();

      var crudItemPageLoaderObj = new CrudItemPageLoader(incomeItemQueryPanelObj, incomeItemResultPanelObj, incomeItemBottomPanelObj);
      crudItemPageLoaderObj.loadTemplates();
	}
);
