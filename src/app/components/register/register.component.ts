import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public title: string;
  public status: string;
  public user: User;
  constructor(
    private _userService: UserService
    
  ) { 
    this.title = 'Registro Usuario'
    this.user = new User(null,'','','','','','',null,'','',null);
  }

  ngOnInit() {
    console.log(this._userService.test());
  }

  onSubmit(form){
    this._userService.storage(this.user).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
