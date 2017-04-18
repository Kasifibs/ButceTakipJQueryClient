$(document).ready(function() {

      var moneyValuePreparator = new MoneyValuePreparator();

      NewExpenseModal.prototype = new NewCrudItemModal();
      NewExpenseModal.prototype.constructor = NewExpenseModal;

      DeleteExpenseModal.prototype = new DeleteCrudItemModal();
      DeleteExpenseModal.prototype.constructor = DeleteExpenseModal;

      UpdateExpenseModal.prototype = new UpdateCrudItemModal();
      UpdateExpenseModal.prototype.constructor = UpdateExpenseModal;

      ExpenseTableGenerator.prototype = new CrudItemTableGenerator();
      ExpenseTableGenerator.prototype.constructor = ExpenseTableGenerator;

      ExpenseQueryPanel.prototype = new CrudItemQueryPanel();
      ExpenseQueryPanel.prototype.constructor = ExpenseQueryPanel;
      var expenseQueryPanelObj = new ExpenseQueryPanel(moneyValuePreparator);

      ExpenseBottomPanel.prototype = new CrudItemBottomPanel();
      ExpenseBottomPanel.prototype.constructor = ExpenseBottomPanel;
      var expenseBottomPanelObj = new ExpenseBottomPanel(moneyValuePreparator);

      ExpenseResultPanel.prototype = new CrudItemResultPanel();
      ExpenseResultPanel.prototype.constructor = ExpenseResultPanel;
      var expenseResultPanelObj  = new ExpenseResultPanel(moneyValuePreparator);

      var crudItemPageLoaderObj = new CrudItemPageLoader(expenseQueryPanelObj, expenseResultPanelObj, expenseBottomPanelObj);
      crudItemPageLoaderObj.loadTemplates();
	}
);
