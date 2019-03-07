import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ItemService } from '../../services/item.service';

import { LoadingController, AlertController } from '@ionic/angular';
import { TicketApiService } from '../../services/ticket-api.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  new_item_form: FormGroup;
  newUser:any;
  items: Array<any>;
  tickets: any;
  user_id:String;
  session_user: any;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private itemService: ItemService,
    public loadingController: LoadingController,
    public ticketService: TicketApiService,
    private storage: Storage,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.new_item_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      father_name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });
    this.storage.get('session_user').then((session_user) => {
      this.session_user = session_user;
      console.log('Your ID is '+this.session_user.id);
    });
    this.presentAlert();
    this.getUser(this.session_user.id);
  }
  
  goBack(){
    this.router.navigate(['/home']);
  }

  createItem(value){
    //this.itemService.createItem(value.name, value.father_name, value.city, value.phone, value.email, value.description, value.image,'1');
  
    this.storage.get('session_user').then((session_user) => {
      console.log('Your ID is ', session_user.id);
      
      this.createTicketAPI(value.name, value.father_name, value.city, value.phone, value.email, value.description, value.image, session_user.id);    
    });  
  
    
  }
  
  async createTicketAPI(name: string, father_name: string, city: string, phone: string,email: string, description: string, image: string, user_id: string)
  {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    
    
    await this.ticketService.createTicket(name, father_name, city, phone, email, description, image, user_id)
      .subscribe(res => {
        console.log(res);
        this.new_item_form.reset();
        this.goBack();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
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
        console.log(res);
        console.log(res.newUser);
        //console.log(res.newtickets[0].name);
        self.newUser = res.newUser;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }

}
