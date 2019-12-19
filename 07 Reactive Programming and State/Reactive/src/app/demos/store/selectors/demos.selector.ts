import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DemosState, demosFeatureKey } from "../reducers/demos.reducer";

export const getDemosState = createFeatureSelector<DemosState>(demosFeatureKey);

// export const getDemosState = createSelector(
//   getDemosFeature,
//   (state: DemosState) => state.demos
// );

export const getAllVouchers = createSelector(
  getDemosState,
  (state: DemosState) => state.vouchers
);
