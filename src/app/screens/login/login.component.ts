import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
// import { inject } from '@angular/core';}
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  message: string = '';

  login_form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  private usersService = inject(UsersService);

  async onSubmit() {
    if(this.login_form.invalid) {
      this.message = 'Please fill out all fields!';
      setTimeout(() =>{
        this.message = '';
      }, 5000);
      return;
    }
    try{
      const message = await this.usersService.login({email: this.login_form.value.email!, password: this.login_form.value.password!});
    if(this.usersService.access_token) {
      console.log('Logged in!');
    } else {
      console.log('Failed to log in!');
      this.message = message;
    }
    } catch (e) {
      console.log('Failed to log in!');
      this.message = 'Failed to log in!';
    }
  }
}
