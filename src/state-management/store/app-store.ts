import { configureStore, ThunkAction, Action, combineReducers, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import menuReducer from '../slices/menu-impl-slice'
import { injectable } from 'inversify';

@injectable()
export default class DefaultStore {

  store: EnhancedStore | undefined
  asyncReducers: any = {}
  staticReducers = {
    "menuReducer": menuReducer
  }

  constructor() {
    this.store = configureStore({
      reducer: {
        ...this.staticReducers,
        ...this.asyncReducers
      }
    })

  }
  addReducerToStore(key: string, reducer: Reducer<any>) {
    if (this.asyncReducers[key]) {
      return
    }
    this.asyncReducers[key] = reducer;

    this.store?.replaceReducer({
      ...this.staticReducers,
      ...this.asyncReducers
    })



  }

}



