import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
     password: [''],
     confirm_password: [''] 
    }, { 
      validator: this.passwordEqualsValidator('password', 'confirm_password')
    });

   }

  ngOnInit(): void {
  }

  passwordEqualsValidator(passwordName: string, passwordRepeatName: string){
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[passwordName];
        const passwordRepeat = formGroup.controls[passwordRepeatName];
        if (passwordRepeat.errors && !passwordRepeat.errors.confirmedValidator) {
            return;
        }
        if (password.value !== passwordRepeat.value) {
          passwordRepeat.setErrors({ passwordEqualsError: true });
        } else {
          passwordRepeat.setErrors(null);
        }
    }
}

submit(){
  console.log(this.form.value);
}

}
