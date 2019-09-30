import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../home/user';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userOriginale: User = {
    id: null,
    nom: null,
    password: null,
    actif: false,
    couleur: '#000'
  };

  user: User = {...this.userOriginale };
  postError = false;
  postErrorMessage = '';
  items: Observable<string[]>;
  singleModel = 'Oui';
  startDate: Date;
  startTime: Date;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getItems();

    this.startDate = new Date();
    this.startTime = new Date();
  }

  onHttpError(errorResponse: any) {
    console.log('Error : ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Add USer ', form.value);
      this.dataService.postUser(form.value).subscribe(
        result => console.log('Success ', result),
        error => this.onHttpError(error) // console.log('Error : ', error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }
  }

}
