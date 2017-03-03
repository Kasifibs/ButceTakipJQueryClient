$(document).ready(function() {

      NewExpenseItemModal.prototype = new NewCrudItemModal();
      NewExpenseItemModal.prototype.constructor = NewExpenseItemModal;

      DeleteExpenseItemModal.prototype = new DeleteCrudItemModal();
      DeleteExpenseItemModal.prototype.constructor = DeleteExpenseItemModal;

      UpdateExpenseItemModal.prototype = new UpdateCrudItemModal();
      UpdateExpenseItemModal.prototype.constructor = UpdateExpenseItemModal;

      ExpenseItemTableGenerator.prototype = new CrudItemTableGenerator();
      ExpenseItemTableGenerator.prototype.constructor = ExpenseItemTableGenerator;


      ExpenseItemQueryPanel.prototype = new CrudItemQueryPanel();
      ExpenseItemQueryPanel.prototype.constructor = ExpenseItemQueryPanel;
      var expenseItemQueryPanelObj = new ExpenseItemQueryPanel();

      ExpenseItemBottomPanel.prototype = new CrudItemBottomPanel();
      ExpenseItemBottomPanel.prototype.constructor = ExpenseItemBottomPanel;
      var expenseItemBottomPanelObj = new ExpenseItemBottomPanel();

      ExpenseItemResultPanel.prototype = new CrudItemResultPanel();
      ExpenseItemResultPanel.prototype.constructor = ExpenseItemResultPanel;
      var expenseItemResultPanelObj = new ExpenseItemResultPanel();

      var crudItemPageLoaderObj = new CrudItemPageLoader(expenseItemQueryPanelObj, expenseItemResultPanelObj, expenseItemBottomPanelObj);
      crudItemPageLoaderObj.loadTemplates();
	}
);
