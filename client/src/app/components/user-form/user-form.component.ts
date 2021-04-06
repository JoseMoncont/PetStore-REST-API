import { Component, HostBinding, OnInit } from '@angular/core';
import { User }  from '../../models/User';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/users.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') classes ='row';
  user: User ={
    id:0,
    username: '',
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    userStatus: '',
    phone: '',
    created_at: new Date()
  }
  edit: boolean = false;

  constructor( private userService: UserService, private router: Router, private activedRoute: ActivatedRoute){}

  ngOnInit(){
    const params = this.activedRoute.snapshot.params;
    if (params.id){
      this.userService.getUser(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.user = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }
  saveNewUser(){
    delete this.user.created_at;
    delete this.user.id;
    this.userService.saveUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/users']);
      },
      err => console.error(err)
    )

  }
  updateUser(){
    delete this.user.created_at;
    this.userService.updateUser(this.user.id!, this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/users']);
      },
      err => console.log(err)

    )
  }


}

