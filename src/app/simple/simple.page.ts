import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.page.html',
  styleUrls: ['./simple.page.scss'],
})
export class SimplePage implements OnInit {

  principle: number;
  interest: number;
  interestPeriodType: string;
  term: number;
  termPeriodType: string;
  simpleInterest: number;
  convertedTerm: number;

  constructor() {
    this.termPeriodType = 'year';
    this.interestPeriodType = 'year';
  }

  ngOnInit() {

  }

  calculateSimpleInterest () {
    console.log(this.principle);
    console.log(this.interest);
    console.log(this.term);
    console.log(this.termPeriodType);
    console.log(this.interestPeriodType);
    this.simpleInterest = this.principle * this.interest / 100;
    if (this.interestPeriodType === 'year' && this.termPeriodType === 'month') {
      this.convertedTerm = this.term / 12;
    } else if (this.interestPeriodType === 'month' && this.termPeriodType === 'year') {
      this.convertedTerm = this.term * 12;
    } else {
      this.convertedTerm = this.term;
    }
    this.simpleInterest = this.simpleInterest * this.convertedTerm;

    // if (this.interestPeriodType === 'year') {
    //   if (this.termPeriodType === 'year') {
    //     this.simpleInterest = this.simpleInterest * this.term;
    //   } else if (this.termPeriodType === 'month') {
    //     this.simpleInterest = this.simpleInterest * this.term / 12;
    //   }
    // } else if (this.interestPeriodType === 'month') {
    //   if (this.termPeriodType === 'year') {
    //     this.simpleInterest = this.simpleInterest * this.term * 12;
    //   } else if (this.termPeriodType === 'month') {
    //     this.simpleInterest = this.simpleInterest * this.term;
    //   }
    // }

    console.log('Simple Interest (nearest to ' + this.simpleInterest + '): ' + Math.round(this.simpleInterest));
  }
}
