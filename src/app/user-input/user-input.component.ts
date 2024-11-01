import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {} // inject service

  // ngModel auto reads, sets them
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');


  // () at the end to be able to read all of the signals.
    onSubmit() {
      this.investmentService.calculateInvestmentResults({
        initialInvestment: +this.enteredInitialInvestment(),
        duration: +this.enteredDuration(),
        expectedReturn: +this.enteredExpectedReturn(),
        annualInvestment: +this.enteredAnnualInvestment()
      });
      // reset after calculations
      this.enteredInitialInvestment.set('0');
      this.enteredDuration.set('0');
      this.enteredExpectedReturn.set('5');
      this.enteredAnnualInvestment.set('10');
    }
}
