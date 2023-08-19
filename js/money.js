function calculateMoney(){
    
   const incomeInputValue =  getInputId('total-income');
   const foodInputValue   =  getInputId('food-input');
   const rentInputValue   =  getInputId('rent-input');
   const clothInputValue  =  getInputId('cloth-input');

   const totalExpenses    = foodInputValue + rentInputValue + clothInputValue;
   const totalBalance     = incomeInputValue - totalExpenses;

   if(totalExpenses > incomeInputValue){
        alert('You Have Not Enough Money')
        return;
   }

   if(isNaN(totalExpenses) || isNaN(totalBalance)){
        return;
   }
   setCalculationValue('expenses-total',totalExpenses);
   setCalculationValue('balance-total',totalBalance);
   
   
   const savingInputValue =  getInputId('save-input');
   const saveCalculate    =  (totalBalance * savingInputValue) / 100;
   const remainingBalance =  totalBalance - saveCalculate;
    if(isNaN(saveCalculate) || isNaN(remainingBalance)){
        alert('Enter Saving Input Value')
        return;
    }
   setCalculationValue('saving-total',saveCalculate);
   setCalculationValue('remaining-total',remainingBalance);

}

function getInputId(getId){

    const totalIncomeBalance = parseFloat(document.getElementById(getId).value);
    return totalIncomeBalance;   
}

function setCalculationValue(setGetId, setValue){

    const expenses = document.getElementById(setGetId);
          expenses.innerText = setValue;
          return expenses;
}
