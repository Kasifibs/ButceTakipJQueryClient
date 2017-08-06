$(document).ready(function() {

      var moneyValuePreparator = new MoneyValuePreparator();

      NewPeriodModal.prototype = new NewCrudItemModal();
      NewPeriodModal.prototype.constructor = NewPeriodModal;

      DeletePeriodModal.prototype = new DeleteCrudItemModal();
      DeletePeriodModal.prototype.constructor = DeletePeriodModal;

      UpdatePeriodModal.prototype = new UpdateCrudItemModal();
      UpdatePeriodModal.prototype.constructor = UpdatePeriodModal;

      PeriodTableGenerator.prototype = new CrudItemTableGenerator();
      PeriodTableGenerator.prototype.constructor = PeriodTableGenerator;


      PeriodQueryPanel.prototype = new CrudItemQueryPanel();
      PeriodQueryPanel.prototype.constructor = PeriodQueryPanel;
      var periodQueryPanelObj = new PeriodQueryPanel();

      PeriodBottomPanel.prototype = new CrudItemBottomPanel();
      PeriodBottomPanel.prototype.constructor = PeriodBottomPanel;
      var periodBottomPanelObj = new PeriodBottomPanel(moneyValuePreparator);

      PeriodResultPanel.prototype = new CrudItemResultPanel();
      PeriodResultPanel.prototype.constructor = PeriodResultPanel;
      var periodResultPanelObj = new PeriodResultPanel();

      var crudItemPageLoaderObj = new CrudItemPageLoader(periodQueryPanelObj, periodResultPanelObj, periodBottomPanelObj);
      crudItemPageLoaderObj.loadTemplates();
	}
);
