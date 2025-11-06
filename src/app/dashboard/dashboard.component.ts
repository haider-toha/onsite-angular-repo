import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accounts = [
    { name: 'Checking', balance: 5000.50 },
    { name: 'Savings', balance: 15000.75 },
    { name: 'Investment', balance: 75000.00 }
  ];

  totalBalance: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Calculate total balance using native JavaScript
    this.totalBalance = this.accounts.reduce((sum, account) => sum + account.balance, 0);
  }

  formatBalance(balance: number): string {
    return (Math.round(balance * 100) / 100).toLocaleString();
  }

}
