import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController ,AlertController} from '@ionic/angular';

import { TicketApiService } from '../../services/ticket-api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-grievence',
  templateUrl: './grievence.page.html',
  styleUrls: ['./grievence.page.scss'],
})
export class GrievencePage implements OnInit {

  items: Array<any>;
  tickets: any;
  user_id:String;
  session_user: any;
  newUser:any;
  complaint:any;

  constructor(public loadingController: LoadingController,
    public ticketService: TicketApiService,
    private alertController: AlertController,
    private storage: Storage) { }

  ngOnInit() {
    this.storage.get('session_user').then((session_user) => {
      this.session_user = session_user;
      console.log('Your ID is '+this.session_user.id);
    //   // this.getUser(this.session_user.id);
      this.getTickets('51');
    });
  }
  async getTickets(user_id: string) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.ticketService.getAssignedTickets(user_id)
      .subscribe(res => {
        this.tickets = res;
        if (this.tickets.completedtickets != undefined && this.tickets.completedtickets.length == 0 && this.tickets.processingtickets.length == 0 &&this.tickets.processingtickets.length == 0) {
          this.complaint = 0;
        }else{
          this.complaint = this.tickets.completedtickets.length + this.tickets.processingtickets.length;
        }
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }

  async markComplete(ticketId){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    let remarks = document.getElementById('remarks')["value"];
    await this.ticketService.markComplete(ticketId , remarks)
    .subscribe(res => {
      this.getTickets(this.session_user.id);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
  });
  }
}
