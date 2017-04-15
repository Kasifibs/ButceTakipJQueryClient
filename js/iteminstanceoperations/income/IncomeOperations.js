$(document).ready(function() {

      var moneyValuePreparator = new MoneyValuePreparator();

      NewIncomeModal.prototype = new NewCrudItemModal();
      NewIncomeModal.prototype.constructor = NewIncomeModal;

      DeleteIncomeModal.prototype = new DeleteCrudItemModal();
      DeleteIncomeModal.prototype.constructor = DeleteIncomeModal;

      UpdateIncomeModal.prototype = new UpdateCrudItemModal();
      UpdateIncomeModal.prototype.constructor = UpdateIncomeModal;

      IncomeTableGenerator.prototype = new CrudItemTableGenerator();
      IncomeTableGenerator.prototype.constructor = IncomeTableGenerator;

      IncomeQueryPanel.prototype = new CrudItemQueryPanel();
      IncomeQueryPanel.prototype.constructor = IncomeQueryPanel;
      var incomeQueryPanelObj = new IncomeQueryPanel(moneyValuePreparator);

      IncomeBottomPanel.prototype = new CrudItemBottomPanel();
      IncomeBottomPanel.prototype.constructor = IncomeBottomPanel;
      var incomeBottomPanelObj = new IncomeBottomPanel(moneyValuePreparator);

      IncomeResultPanel.prototype = new CrudItemResultPanel();
      IncomeResultPanel.prototype.constructor = IncomeResultPanel;
      var incomeResultPanelObj  = new IncomeResultPanel(moneyValuePreparator);

      var crudItemPageLoaderObj = new CrudItemPageLoader(incomeQueryPanelObj, incomeResultPanelObj, incomeBottomPanelObj);
      crudItemPageLoaderObj.loadTemplates();
	}
);
