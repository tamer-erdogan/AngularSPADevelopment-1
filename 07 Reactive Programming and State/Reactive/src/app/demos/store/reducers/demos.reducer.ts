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
  vouchers: [
    {
      ID: 4,
      Text: "Media Markt",
      Date: "2016-11-05T10:50:04.1215883",
      Amount: 100,
      Paid: true,
      Expense: true,
      Remark: false,
      Details: []
    },
    {
      ID: 5,
      Text: "CO² Steuer",
      Date: "2019-11-05T10:50:04.1215883",
      Amount: 100,
      Paid: true,
      Expense: true,
      Remark: false,
      Details: []
    }
  ]
};

//Slices

// export const getVouchers = (state: DemosState) => state.vouchers;

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
export function DemoReducer(state = initialState, action: VouchersActions) {
  switch (action.type) {
    case VouchersActionTypes.AddVoucher:
      let arr = [...state.vouchers, action.payload];
      return { ...state, vouchers: arr };
    default:
      return state;
  }
}
