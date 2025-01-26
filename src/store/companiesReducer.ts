import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Company } from "../types";
import { COMPANIES } from "../constants";

const initialState = {
  companies: COMPANIES,
};

const slice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    saveCompany(store, action: PayloadAction<Omit<Company, "id">>) {
      const newCompany = action.payload;
      let idOfNewCompany = 0;
      Object.keys(store.companies).forEach((id) => {
        idOfNewCompany = Math.max(idOfNewCompany, parseInt(id) + 1);
      });
      store.companies[`${idOfNewCompany}`] = {
        ...newCompany,
        id: idOfNewCompany,
      };
      return store;
    },
    removeCompanies(store, action: PayloadAction<number[]>) {
      action.payload.forEach((idOfCompanyToRemove) => {
        delete store.companies[idOfCompanyToRemove];
      });
      return store;
    },
  },
});

export const companiesStoreActions = slice.actions;

export const companiesReducer = slice.reducer;
