import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController ,AlertController} from '@ionic/angular';

import { TicketApiService } from '../../services/ticket-api.service';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-track-own-complaints',
  templateUrl: './track-own-complaints.page.html',
  styleUrls: ['./track-own-complaints.page.scss'],
})
export class TrackOwnComplaintsPage implements OnInit {

  items: Array<any>;
  tickets: any;
  user_id:String;
  session_user: any;
  newUser:any;
  complaint:any;

  constructor(private router: Router,
    public loadingController: LoadingController,
    public ticketService: TicketApiService,
    private alertController: AlertController,
    private storage: Storage) { }

  ngOnInit() {
    this.storage.get('session_user').then((session_user) => {
      this.session_user = session_user;
      console.log('Your ID is '+this.session_user.id);
    //   // this.getUser(this.session_user.id);
      this.getTickets(this.session_user.id);
    });
   
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
        if (this.tickets.completedtickets.length == 0 && this.tickets.processingtickets.length == 0 && this.tickets.newtickets.length == 0) {
          this.complaint = 0;
          this.presentAlert();
        }else{
          this.complaint = this.tickets.completedtickets.length + this.tickets.processingtickets.length + this.tickets.newtickets.length;
        }
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }
  goBack(){
    this.router.navigate(['/track-complaint']);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: 'The complaints are not registered from this mobile number',
      message: 'Do you want to know the status of registered complaint from another mobile number.',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
          this.router.navigate(['/track-others-complaints'])
          }
        }
      ]
    });

    await alert.present();
  }

}
