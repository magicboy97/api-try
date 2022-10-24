import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-try';
  userData : any = []
  searchInput : string = ''

  constructor(private user: UserService ) { }

  getData() {
    this.user.getUserData().subscribe((result) => {
      this.userData = result
      console.log(this.userData)
    })
    
  }

  onChangeName(v : string) {
    this.searchInput = v
  }
}
