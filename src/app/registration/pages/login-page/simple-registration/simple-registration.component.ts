// NEEDS_WORK: actual functionality is missing REST call, error handling, validators
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { USER_REGISTRATION_LOGIN_TYPE } from '../../../../core/configurations/injection-keys';
import { AccountLoginService } from '../../../../core/services/account-login/account-login.service';
import { FormUtilsService } from '../../../../core/services/utils/form-utils.service';


@Component({
  selector: 'ish-simple-registration',
  templateUrl: './simple-registration.component.html'
})

export class SimpleRegistrationComponent implements OnInit {
  simpleRegistrationForm: FormGroup;
  isUsername: boolean;
  errorUser: string;
  isDirty: boolean;

  constructor(
    @Inject(USER_REGISTRATION_LOGIN_TYPE) private userRegistrationLoginType: string,
    private formBuilder: FormBuilder,
    private router: Router,
    private accountLoginService: AccountLoginService,
    private formUtils: FormUtilsService
  ) { }

  /**
     * Creates Login Form
  */
  ngOnInit() {
    this.isUsername = this.userRegistrationLoginType === 'username';
    const password = new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9!@#$%^&*()_+}{?><:"\S]{7,})$/)]);
    const confirmPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);
    this.simpleRegistrationForm = this.formBuilder.group({
      userName: ['', Validators.compose([this.isUsername ? Validators.required : Validators.nullValidator])],
      email: ['', [Validators.required, CustomValidators.email]],
      password: password,
      confirmPassword: confirmPassword
    });
  }

  /**
     * Creates simple Account
  */
  createAccount() {
    if (this.simpleRegistrationForm.invalid) {
      this.isDirty = true;
      this.formUtils.markAsDirtyRecursive(this.simpleRegistrationForm);
      return;
    }
    const userData = this.simpleRegistrationForm.value;
    this.accountLoginService.createUser(userData).subscribe(response => {
      // TODO: Check should be in accordance with rest call response
      if (response) {
        this.router.navigate(['/home']);
      }
    });
  }
  errorMessage() {
    return this.isUsername ? ('account.username.already_exist.error') : ('account.email.already_exist.error');
  }
}
