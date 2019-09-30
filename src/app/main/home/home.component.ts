import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  originalUser: User = {
          id: 1,
          nom: 'Houssin',
          password: '1234',
          actif: true,
          couleur: '#80ff0F'
        };

  user: User = {...this.originalUser};

  constructor() { }

  ngOnInit() {
  }

}
