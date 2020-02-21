import { Component, OnInit } from '@angular/core';

class UserVM {
  name: string;
  lastName: string;
  isStudent: boolean;
  email: string;
  password: string;
  passwordConfirm: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  // todo: ITodo = new ITodo();
  user: UserVM;
  
  constructor() { 
    this.user =  new UserVM();
  }
  ngOnInit() {}

  logForm() {
    alert(JSON.stringify(this.user));
    
  }
  clearData() {
    this.user = new UserVM();
  }


   presentModal() {
    // create the modal with the `modal-page` component
    const modalElement = document.createElement('ion-modal');
    modalElement.component = 'modal-page';
  
    // present the modal
    document.body.appendChild(modalElement);
    return modalElement.present();
  }
  

 

}