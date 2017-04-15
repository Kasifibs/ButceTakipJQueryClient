var MoneyValuePreparator = function(){

  this.prepareMoneyValue = function(integerPart, decimalPart){
    if(integerPart != "" && decimalPart != ""){
      return integerPart + "." + decimalPart;
    }
    if(integerPart == "" && decimalPart != ""){
      return "0." + decimalPart;
    }
    if(integerPart != "" && decimalPart == ""){
      return integerPart + ".00";
    }
    if(integerPart == "" && decimalPart == ""){
      return undefined;
    }
  }
}
