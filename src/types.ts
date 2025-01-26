export enum RoutePath {
  MainPage = "*",
}

export type CompaniesList = Record<string, Company>;

export interface Company {
  id: number;
  name: string;
  address: string;
}

export interface CompaniesStore {
  companies: {
    amount: number;
    companyData: Company;
  }[];
}
