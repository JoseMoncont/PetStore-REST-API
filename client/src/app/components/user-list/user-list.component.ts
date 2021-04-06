import { Component, HostBinding, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any = [];
  @HostBinding('class') classes = 'row';

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.error(err)
    );
  }
  deleteUser(id: string){
    this.userService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
      },
      err => console.log(err)
    )
  }

}