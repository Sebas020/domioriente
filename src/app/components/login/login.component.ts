import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
    public user: User;
    public title: string;
    public identity: any;
    public token;
  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.user = new User(null,'','','','','','',null,'','',null);
    this.title = 'Ingresar a domi oriente';
  }

  ngOnInit() {
  }

  onSubmit(){
    this._userService.singup(this.user).subscribe(
      response=>{
        if(response.sub){
          this.identity = response;
          localStorage.setItem('identity', JSON.stringify(this.identity)); 
          this._userService.singup(this.user, true).subscribe(
            response => {
              if(response.status == 'success'){
                this.token = response.token;
                localStorage.setItem('token', this.token);
                this._router.navigate(['/inicio']);
              }
            },
            error =>{
              console.log(error);
            }
          );
        }
      },
      error=>{
        console.log(error);
      }
    );
  }

}
