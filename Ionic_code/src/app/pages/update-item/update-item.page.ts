import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { LoadingController } from '@ionic/angular';
import { TicketApiService } from '../../services/ticket-api.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  item: any;
  edit_item_form: FormGroup;
  session_user : any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private itemService: ItemService,
    public loadingController: LoadingController,
    public ticketService: TicketApiService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.item = param;
        this.edit_item_form = this.formBuilder.group({
          
          id: new FormControl(this.item.id, Validators.required),
          name: new FormControl(this.item.name, ),
          father_name: new FormControl(this.item.father_name, ),
          city: new FormControl(this.item.city, ),
          phone: new FormControl(this.item.phone, ),
          email: new FormControl(this.item.email, ),
          description: new FormControl(this.item.description, ),
          image: new FormControl(this.item.image, ),
          state: new FormControl(this.item.state, ),
          engineer_id: new FormControl(this.item.engineer_id, ),
          remarks: new FormControl("", ),
          user_id: new FormControl(this.item.user_id, ),
          //new_engineer_id: new FormControl(this.item.user_id, ),
          datetime: new FormControl(this.item.datetime, ),
        });
      }
    )
    
    
    this.storage.get('session_user').then((session_user) => {
      //console.log('Your ID is ', session_user.id);
      //this.getTickets(session_user.id);
      
      this.session_user = session_user;
    });
    
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  assignTicket(value){
    //let newValues = {
    //  id: this.item.id,
    //  //name: value.title,
    //  //description: value.description
    //  id: value.id,
    //  name: value.name,
    //  father_name: value.father_name,
    //  city: value.city,
    //  phone: value.phone,
    //  email: value.email,
    //  description: value.description,
    //  image: value.image,
    //  state: value.state,
    //  engineer_id: value.engineer_id,
    //  remarks: value.remarks
    //  user_id: value.user_id,
    //  new_engineer_id: value.new_engineer_id,
    //  datetime: value.datetime,
    //  
    //}
    //console.log("New Engineer ID= "+new_engineer_id);
    //this.itemService.assignTicket(value.new_engineer_id, value.id);
    //this.itemService.updateItem(newValues);
    this.goBack();
  }

  markComplete(value){
    //let newValues = {
    //  id: this.item.id,
    //  //name: value.title,
    //  //description: value.description
    //  //id: value.id,
    //  name: value.name,
    //  father_name: value.father_name,
    //  city: value.city,
    //  phone: value.phone,
    //  email: value.email,
    //  description: value.description,
    //  image: value.image,
    //  state: value.state,
    //  engineer_id: value.engineer_id,
    //  user_id: value.user_id,
    //  datetime: value.datetime,
    //  
    //}
    console.log("Remarks = "+value.remarks+" ID="+value.id);
    this.markCompleteAPI(value.remarks,value.id);
    this.goBack();
  }
  
  
  async markCompleteAPI(remarks: string, id: string)
  {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    
    
    await this.ticketService.markComplete(id,remarks)
      .subscribe(res => {
        console.log(res);
        this.edit_item_form.reset();
        this.goBack();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }

}
