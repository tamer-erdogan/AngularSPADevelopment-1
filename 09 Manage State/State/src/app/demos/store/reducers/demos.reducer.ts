import { initialVoucher } from "../../initialVoucher";
import { VouchersActionTypes, VouchersActions } from "../actions/demos.actions";
import { Voucher } from "../../samples/model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

//Feature Key

export const demosFeatureKey = "demos";

//State & Default

export interface DemosState {
  vouchers: Voucher[];
}

export interface DemosFeatureState {
  demos: DemosState;
}

export const initialState: DemosState = {
  vouchers: initialVoucher
};

//Slices

export const getVouchers = (state: DemosState) => state.vouchers;

//Selectors

export const getDemosFeature = createFeatureSelector<DemosFeatureState>(
  demosFeatureKey
);

export const getDemosState = createSelector(
  getDemosFeature,
  (state: DemosFeatureState) => state.demos
);

export const getAllVouchers = createSelector(
  getDemosState,
  (state: DemosState) => state.vouchers
);

//Reducer
export function reducer(state = initialState, action: VouchersActions) {
  switch (action.type) {
    case VouchersActionTypes.AddVoucher:
      let arr = [...state.vouchers, action.payload];
      return { ...state, vouchers: arr };
    default:
      return state;
  }
}
