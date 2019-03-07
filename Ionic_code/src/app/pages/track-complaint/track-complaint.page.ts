import { Component, OnInit } from '@angular/core';
import { AlertController,LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

import { TicketApiService } from '../../services/ticket-api.service';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-track-complaint',
  templateUrl: './track-complaint.page.html',
  styleUrls: ['./track-complaint.page.scss'],
})
export class TrackComplaintPage implements OnInit {
  tickets: any;
  user_id:String;
  session_user: any;
  constructor(public loadingController: LoadingController,private alertController: AlertController,public ticketService: TicketApiService, private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('session_user').then((session_user) => {
      this.session_user = session_user;
      console.log('Your ID is '+this.session_user.id);
      this.getTickets(this.session_user.id);
    });
}
  goBack(){
    this.router.navigate(['/home']);
  }
  trackOwnComplaints(){
    this.router.navigate(['/track-own-complaints']);
  }
  trackOthersComplaints(){
    this.router.navigate(['/track-others-complaints']);
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
