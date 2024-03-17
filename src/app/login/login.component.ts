import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() { // Remove the argument from onSubmit()
    // Your login logic here
    const accountType = this.getAccountType(this.username, this.password);

    // Navigate based on account type
    switch (accountType) {
      case 'administrateur':
        this.router.navigate(['/administrateur']);
        break;
      case 'developer':
        this.router.navigate(['/developer']);
        break;
      case 'organizer':
        this.router.navigate(['/organizer']);
        break;
      default:
        // Handle invalid account type or authentication failure
        alert('Invalid username or password');
        break;
    }

    // Reset the form
    this.username = '';
    this.password = '';
  }

  // Mock function to get account type based on username and password
  private getAccountType(username: string, password: string): string {
    // Replace this with your actual authentication logic
    // For demonstration purposes, let's assume some predefined accounts
    if (username === 'admin' && password === 'admin') {
      return 'administrateur';
    } else if (username === 'dev' && password === 'dev') {
      return 'developer';
    } else if (username === 'org' && password === 'org') {
      return 'organizer';
    } else {
      return 'invalid'; // Or handle authentication failure appropriately
    }
  }
}
