import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

import { LoadingController } from '@ionic/angular';
import { TicketApiService } from '../../services/ticket-api.service';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  items: Array<any>;
  tickets: any;
  user_id:String;
  session_user: any;
  newUser:any;
  userType : any;

  constructor(
    private router: Router,
    public itemService: ItemService,
    public loadingController: LoadingController,
    public ticketService: TicketApiService,
    private storage: Storage
  ){}

  ngOnInit(){
    this.userType = true;
    console.log('ngOnInit called');
    //this.items = this.itemService.getItems();
    
    //console.log(this.items.length);
    //user_id = "1";
    //
    //console.log("user id = "+user_id);
    
    // Or to get a key/value pair
    this.storage.get('session_user').then((session_user) => {
      this.session_user = session_user;
      console.log('Your ID is '+this.session_user.id);
      this.getTickets(this.session_user.id);
    });
    //this.getTickets("1");
  //this.jsWork();

  
  }

  jsWork()
  {
    // Check browser support
    if (typeof(Storage) !== "undefined") {
        
        // Retrieve
        alert(localStorage.getItem("lastname"));
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
  }

  openNewItemPage(){
    this.router.navigate(["/new-item"]);
    
  }
  goAbout(){
    this.router.navigate(["/about-us"]);
  }
  goContact(){
    this.router.navigate(["/contact-us"]);
  }
  goUser(){
    this.router.navigate(["/user-details"]);
  }
  goFeedback(){
    this.router.navigate(["/feedback"]);
  }
  goReminder(){
    this.router.navigate(["/reminder"]);
  }
  goTrack(){
    this.router.navigate(["/track-complaint"]);
  }
  goRegister(){
    this.router.navigate(["/new-item"]);
  }
  goGrievance(){
    this.router.navigate(['/grievence'])
  }
  
  doLogout(){
    this.router.navigate(["/login"]);
  }

  goToItem(item){
    this.router.navigate(["/update-item", item]);
  }
  
  
  
  
  async getTickets(user_id: string) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.ticketService.getTickets(user_id)
      .subscribe(res => {
        console.log(res);
        console.log(res.newtickets);
        //console.log(res.newtickets[0].name);
        this.tickets = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }

}
