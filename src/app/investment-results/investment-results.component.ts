import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})


// REMEMBER (), in HTML to activate SIGNAL
// () matters at the end of InvestResultComponent as a signal
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService) // inject service

  
  get results() {
    return this.investmentService.resultData;
  }

}
