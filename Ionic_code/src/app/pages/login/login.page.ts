import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ItemService } from '../../services/item.service';

import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { TicketApiService } from '../../services/ticket-api.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private itemService: ItemService,
    public loadingController: LoadingController,
    public ticketService: TicketApiService,
    public alertCtrl: AlertController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.login_form = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  //this.jsWork();

  
  }

  jsWork()
  {
    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", "Smith");
        // Retrieve
        alert(localStorage.getItem("lastname"));
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
  }

  //goBack(){
  //  this.router.navigate(['/home']);
  //}

  doLogin(value){
    //this.itemService.createItem(value.title, value.description);
    this.doLoginAPI(value.email,value.password);
    // Or to get a key/value pair
    
    //this.storage.get('name').then((val) => {
    //  console.log('Your name is', val);
    //});
    
    //this.goBack();
  }
  
  openSignupPage(type){
    this.router.navigate(["/signup", { userType   : type }]);
  }
  
  
  async doLoginAPI(email: string, password:string)
  {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    
    
    await this.ticketService.Login(email, password)
      .subscribe(res => {
        console.log(res);
        
        if(res.result == "true")
        {
           //this.presentAlert("User signed up successfully!");
           
           this.storage.set('session_user', res.user);
           
          
           this.login_form.reset();
           this.router.navigate(['/home']);
           
        }
        else
        {
           this.presentAlert("User name and password do not match!");
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
    header: 'HimIPH',
    message: messageParam,
    buttons: ['OK']
    });
    await alert.present();
  }

}
