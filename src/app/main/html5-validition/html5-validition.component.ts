import { Component, OnInit } from '@angular/core';
import { User } from '../home/user';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-html5-validition',
  templateUrl: './html5-validition.component.html',
  styleUrls: ['./html5-validition.component.scss']
})
export class Html5ValiditionComponent implements OnInit {

  user: User = {
    id: 1,
    nom: 'houssin',
    couleur: '',
    password: '',
    actif: true
  };

  constructor() { }

  ngOnInit() {
  }

  onBlur(field: NgModel) {
    console.log('in onBlur : ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('Form i valid : ', form.valid);
  }

}
