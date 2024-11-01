export interface InvestmentInput {
    initialInvestment:number;
    duration:number;
    expectedReturn: number;
    annualInvestment: number;
  }

export interface ResultsDataModel {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}[]; // arr of objects with this model