import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { TicketApiService } from '../../services/ticket-api.service';

import { LoadingController, AlertController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-feedback-on-suggestion',
  templateUrl: './feedback-on-suggestion.page.html',
  styleUrls: ['./feedback-on-suggestion.page.scss'],
})
export class FeedbackOnSuggestionPage implements OnInit {
  feedback_on_suggestion_form:FormGroup;

  constructor(public formBuilder: FormBuilder, public loadingController: LoadingController,
    public ticketService: TicketApiService,
    private storage: Storage,private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
    this.feedback_on_suggestion_form = this.formBuilder.group({
      suggestion: new FormControl('', Validators.required)
    });
  }
  trackOthersComplaints(value){
    //this.itemService.createItem(value.name, value.father_name, value.city, value.phone, value.email, value.description, value.image,'1');
  
    this.storage.get('session_user').then((session_user) => {
      console.log('Your ID is ', session_user.id);
      
      this.createTicketAPI(value.suggestion, session_user.id);    
    });  
  
    
  }
  
  async createTicketAPI(suggestion: string, user_id: string)
  {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    
    
    await this.ticketService.createSuggestions(suggestion,  user_id)
      .subscribe(res => {
        console.log(res);
        this.feedback_on_suggestion_form.reset();
        this.router.navigate(['/home']);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }
}
