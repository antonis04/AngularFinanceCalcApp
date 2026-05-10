import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgForOf, NgIf, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  @Input() results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];
}
