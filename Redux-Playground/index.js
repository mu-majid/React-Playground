import { createStore, combineReducers } from '@reduxjs/toolkit';
import { createClaim, createPolicy, deletePolicy } from './ActionCreators';
import { accountingReducer, claimsHistoryReducer, policyReducer } from './Reducers';

const ourDepts = combineReducers(
  {
    accountingReducer, claimsHistoryReducer, policyReducer
  }
);

const store = createStore(ourDepts);

console.log(store.dispatch(createPolicy('Julia', 150)));
console.log(store.dispatch(createPolicy('Lea', 50)));

console.log(store.getState());

console.log(store.dispatch(createClaim('Lea', 125)));

console.log(store.getState());