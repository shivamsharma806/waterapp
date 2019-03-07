import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { TicketApiService } from '../../services/ticket-api.service';
import { LoadingController, AlertController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-feedback-on-complaint',
  templateUrl: './feedback-on-complaint.page.html',
  styleUrls: ['./feedback-on-complaint.page.scss'],
})
export class FeedbackOnComplaintPage implements OnInit {
  feedback_on_complaint_form :FormGroup;
  rating : any = 5;
  currentRate=0;

  constructor(private router: Router,private storage: Storage,public ticketService: TicketApiService,
    public formBuilder: FormBuilder,public loadingController: LoadingController,) { }

  ngOnInit() {
    this.feedback_on_complaint_form = this.formBuilder.group({
      complaint_number: new FormControl('', Validators.required),
      feedback: new FormControl('', Validators.required),
    });
  }
  onModelChange(event){
    this.rating = event;
    console.log(event);
    }

    trackOthersComplaints(value){
      //this.itemService.createItem(value.name, value.father_name, value.city, value.phone, value.email, value.description, value.image,'1');
    
      this.storage.get('session_user').then((session_user) => {
        console.log('Your ID is ', session_user.id);
        
        this.createTicketAPI(value.complaint_number, this.currentRate, value.feedback, session_user.id);    
      });  

    }
    async createTicketAPI(complaint_number: string,star: number,feedback: string, user_id: string)
  {
    const loading = await this.loadingController.create({
      message: 'Sending...'
    });
    await loading.present();
    
    
    await this.ticketService.createfeedback(complaint_number, star , feedback,  user_id)
      .subscribe(res => {
        console.log(res);
        this.feedback_on_complaint_form.reset();
        this.router.navigate(['/home']);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }

}
