import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ItemService } from '../../services/item.service';

import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { TicketApiService } from '../../services/ticket-api.service';


@Component({
  selector: 'signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signup_form: FormGroup;
  userType;
  constructor(
    private router: Router,public route : ActivatedRoute,
    public formBuilder: FormBuilder,
    private itemService: ItemService,
    public loadingController: LoadingController,
    public ticketService: TicketApiService,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.signup_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.userType = this.route.snapshot.paramMap.get('userType');
  }

  //goBack(){
  //  this.router.navigate(['/home']);
  //}

  doSignup(value){
    //this.itemService.createItem(value.title, value.description);
    this.doSignupAPI(value.name,value.phone,value.email,value.password, this.userType);
    
    //this.goBack();
  }
  
  async doSignupAPI(name: string, phone: string, email: string, password: string ,usertype:number)
  {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    
    
    await this.ticketService.signUp(name, phone, email, password ,usertype)
      .subscribe(res => {
        console.log(res);
        
        if(res.result == "true")
        {
           this.presentAlert("User signed up successfully!");
           this.signup_form.reset();
        }
        else
        {
           this.presentAlert("Unable to register user at moment, please try later!");
        }
        
        
        //this.router.navigate(['/login']);
    
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }
  
  async presentAlert(messageParam: string) {
    const alert = await this.alertCtrl.create({
    header: 'WaterApp',
    message: messageParam,
    buttons: ['OK']
    });
    await alert.present();
  }

}
