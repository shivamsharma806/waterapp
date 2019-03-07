import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';

import { TicketApiService } from '../../services/ticket-api.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-track-others-complaints',
  templateUrl: './track-others-complaints.page.html',
  styleUrls: ['./track-others-complaints.page.scss'],
})
export class TrackOthersComplaintsPage implements OnInit {
  track_others_form: FormGroup;
  tickets :any;
  complaint;
  session_user;

  constructor(private router: Router, public storage : Storage,public ticketService : TicketApiService,public loadingController: AlertController,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.storage.get('session_user').then((session_user) => {
      this.session_user = session_user;
      console.log('Your ID is '+this.session_user.id);
    //   // this.getUser(this.session_user.id);
      // this.getTickets(this.session_user.id);
    });
    this.track_others_form = this.formBuilder.group({
      complaint_number: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required)
    });
  }

  async trackOthersComplaints(value) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.ticketService.trackComplaint(value.complaint_number, value.mobile)
      .subscribe(res => {
        //console.log(res.newtickets[0].name);
        this.tickets = res.tickets;
        if (this.tickets.length == 0) {
          this.complaint = 0;
        }else{
          this.complaint = this.tickets.length;
        }
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }
  async getTickets(user_id: string) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.ticketService.getTickets(user_id)
      .subscribe(res => {
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

  reSet(){
    this.track_others_form.reset();
    this.tickets = undefined;
  }
  goBack(){
    this.router.navigate(['/track-complaint']);
  }
}
