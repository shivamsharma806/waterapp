import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  type :any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  giveFeedback(){
    if (this.type.toLowerCase() == 'feedback'){
      this.router.navigate(['/feedback-on-complaint']);
    }else{
      this.router.navigate(['/feedback-on-suggestion']);
    }
  }
  rvalue(ev){
    this.type = ev.detail.value;
  }

}
