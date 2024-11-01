import { Injectable } from "@angular/core";
import { InvestmentInput, ResultsDataModel } from "./investment.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {

    resultData?: ResultsDataModel[]

    calculateInvestmentResults(data: InvestmentInput) {
        const { initialInvestment, expectedReturn, annualInvestment, duration } = data;
        const annualData = [];
        let investmentValue = initialInvestment;
    
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
    
        // updating results data, signals use .set()
        // this.resultsData.set(annualData);
        this.resultData = annualData;
      }

}