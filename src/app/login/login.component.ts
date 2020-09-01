import { Component, OnInit } from '@angular/core';
import {LoginData} from '../model/LoginData';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: LoginData;
  private erreur: any;
  constructor(public loginService: LoginService, public router: Router) {
    this.data = new LoginData('', '');
  }

  // tslint:disable-next-line:no-empty
  ngOnInit(): void {
  }

  onConnectionSubmit() {
    // tslint:disable-next-line:no-console
    console.log(this.data);
    this.loginService.LoginRequest(this.data)
      .subscribe(rest => {
          // tslint:disable-next-line:no-console
          console.log(rest);
          this.loginService.saveToken(rest);
          if (this.data!=null) {
            // tslint:disable-next-line:triple-equals
            if (rest.authorities[0].authority == 'ROLE_ADMINISTRATEUR')
            {
              this.router.navigate(['/Product']);
            }
            // tslint:disable-next-line:triple-equals
            if (rest.authorities[0].authority == 'ROLE_CLIENT')
            {
              this.router.navigate(['/Article']);
            }
          }
          else{
            return this.erreur;
          }
        },
        // tslint:disable-next-line:no-console
        err => console.log(err)
      )
  }
}
