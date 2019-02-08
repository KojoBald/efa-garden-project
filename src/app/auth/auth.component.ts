import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  @Input('email') email: string = '';
  @Input('password') password: string = '';

  constructor(private router: Router) {}

  submit(event) {
    event.preventDefault();
    fetch('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.email,
        password: this.password
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => response.json())
      .then(json => {
        this.storeSession(json.loggedInUser, json.token)
        this.router.navigate([''])
      })
      .catch(error => console.error('got error', error))
  }

  storeSession({ role }, token) {
    sessionStorage.setItem('role', role)
    sessionStorage.setItem('token', token)
  }
}
