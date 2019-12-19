import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import * as fromDemo from "src/app/demos/store/reducers/demos.reducer";

export interface State {
  demos: fromDemo.DemosState;
}

export const reducers: ActionReducerMap<State> = {
  demos: fromDemo.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
