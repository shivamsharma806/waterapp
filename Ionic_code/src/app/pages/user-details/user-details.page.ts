import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TicketApiService } from '../../services/ticket-api.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  newUser:any;
  edit_user_form:FormGroup;
  session_user: any;

  constructor(private router: Router,private storage: Storage,
    public formBuilder: FormBuilder,public ticketService: TicketApiService,public alertController: AlertController, public loadingController: LoadingController) { }

  ngOnInit() {
    this.edit_user_form= this.formBuilder.group({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
    this.storage.get('session_user').then((session_user) => {
      this.session_user = session_user;
      console.log('Your ID is '+this.session_user);
      this.getUser(this.session_user.id);
    });

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'note',
      message: 'You will no longer need to choose the respective officer in the system. According to the department of your choice and complaint, your complaint will be directly accessible to the settlement officer, so that the speed of the complaint can be immediately ascertained.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async getUser(user_id: string) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.ticketService.getUser(user_id)
      .subscribe(res => {
        let self = this;
        self.newUser = res.newUser;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }
  async updateUser(value) {
    const loading = await this.loadingController.create({
      message: 'Updating...'
    });
    await loading.present();
    await this.ticketService.updateUser(value.name , value.phone , value.email,this.session_user.id)
      .subscribe(res => {
        let self = this;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }
}
