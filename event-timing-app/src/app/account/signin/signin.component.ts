import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsHelperService } from "src/app/shared/services/forms-helper.service";
import { ErrorProcessingService } from "src/app/shared/error-processing.service";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  login: FormControl;
  password: FormControl;

  // tslint:disable-next-line:no-inferrable-types
  inProgress: boolean = false;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formsHelperService: FormsHelperService,
    private _errorProcessingService: ErrorProcessingService
  ) {}

  ngOnInit() {
    this.login = new FormControl(null, [Validators.required]);
    this.password = new FormControl(null, [Validators.required]);

    this.loginForm = new FormGroup({
      login: this.login,
      password: this.password
    });
  }

  signIn() {
    this._formsHelperService.validateAllFormFields(this.loginForm);

    if (!this.loginForm.valid) {
      return;
    }

    this.inProgress = true;
    this._authService
      .signIn(this.login.value, this.password.value)
      .pipe(
        finalize(() => {
          this.inProgress = false;
        })
      )
      .subscribe(
        isSuccessful => {
          this.inProgress = false;
          if (isSuccessful) {
            const returnUrl = this._route.snapshot.queryParamMap.get(
              "returnUrl"
            );

            if (returnUrl) { 
              this._router.navigate([returnUrl]); 
            }else { 
            this._router.navigate(['/']);
            }

          } else {
            this._errorProcessingService.showBusinessError(
              "Ошибка при входе",
              "Неверный логин или пароль!"
            );
          }
        },
        error => {
          // TODO: куда поместить проверку на статус-код и сообщение о неверных креденшиалах
          this._errorProcessingService.showBusinessError(
            "Ошибка при входе",
            "Неверный логин или пароль!"
          );

          // сбросим значение пароля
          this.password.reset();
        }
      );
  }
}
