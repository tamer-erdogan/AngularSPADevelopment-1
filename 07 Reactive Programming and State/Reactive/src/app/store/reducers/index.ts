import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import {
  DemosState,
  DemoReducer
} from "src/app/demos/store/reducers/demos.reducer";

export interface State {
  demos: DemosState;
}

export const reducers: ActionReducerMap<State> = {
  demos: DemoReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
