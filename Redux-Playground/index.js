import { createStore, combineReducers } from '@reduxjs/toolkit';
import { createClaim, createPolicy, deletePolicy } from './ActionCreators';
import { accountingReducer, claimsHistoryReducer, policyReducer } from './Reducers';

