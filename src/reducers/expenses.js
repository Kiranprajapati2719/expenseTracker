
//Expense Reducer

const defaultExpenses = [];

export default (state = defaultExpenses, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      //remove selected id
      return state.filter(({id})=> id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id === action.id){
          return {
            //override with existing
            ...expense,
            ...action.update
          }; 
        }else{
          return expense;
        }
      });
    case 'SET_EXPENSES' : 
      return action.expenses;
    default:
      return state;
  }
};
