import { Component, Input, OnInit, Optional } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { User } from '../user/user.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input() user: User;

  constructor(@Optional() private parent: UserComponent) { }

  ngOnInit() {
    console.log(this.parent);
    this.parent.user = { ...this.user };
  }

}
