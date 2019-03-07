import { Component, OnInit } from '@angular/core';
import { LoadingController ,AlertController} from '@ionic/angular';
import { Router } from '@angular/router';

import { TicketApiService } from '../../services/ticket-api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {
  items: Array<any>;
  tickets: any;
  user_id:String;
  session_user: any;
  newUser:any;
  complaint:any;
  constructor(public loadingController: LoadingController,
    public ticketService: TicketApiService,
    private alertController: AlertController,public router : Router,
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
        }else{
          this.complaint = this.tickets.completedtickets.length + this.tickets.processingtickets.length + this.tickets.newtickets.length;
        }
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }
  sendReminder(id){
    this.remind(id);
  }
  async remind(id: string) {
    const loading = await this.loadingController.create({
      message: 'Sending'
    });
    await loading.present();
    await this.ticketService.remind(id)
      .subscribe(res => {
        this.tickets = res;
        this.getTickets(this.session_user.id);
        // this.router.navigate(['/reminder']);
        loading.dismiss();
      }, err => {
        loading.dismiss();
    });
  }

}
