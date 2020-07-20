export const claimsHistoryReducer = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {

    // always inside a reducer return new instance 
    // of whatever is getting updated
    // Avoid Mutating any existing Data Structures
    return [...oldListOfClaims, action.payload];
  }

  return oldListOfClaims;
}

export const policyReducer = (oldPoliciesList = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    
    return [...oldPoliciesList, action.payload.name];
  }
  else if (action.type === 'DELETE_POLICY') {

    return oldPoliciesList.filter(p => p.name !== action.payload.name);
  }

  return oldPoliciesList;
}

export const accountingReducer = (moneyBag = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {

    return moneyBag - action.payload.amountToCollect;
  }
  else if (action.type === 'CREATE_POLICY') {

    return moneyBag + action.payload.amount;
  }
  else {

    return moneyBag;
  }
}