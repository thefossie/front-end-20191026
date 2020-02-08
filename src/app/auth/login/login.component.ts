import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formGroup: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group ({
      'email': new FormControl( '', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl ( '', [
        Validators.required
      ])
    });
  }

  onSubmit (){
    if( !this.formGroup.valid ){
      return;
    }
    console.log(this.formGroup.value);
    //Service
    this.formGroup.reset ();
  }

  get email (){
    return this.formGroup.get ( 'email' );
  }

  get password (){
    return this.formGroup.get ( 'password' );
  }
}
