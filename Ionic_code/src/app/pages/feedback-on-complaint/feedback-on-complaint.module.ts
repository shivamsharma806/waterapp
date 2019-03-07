import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeedbackOnComplaintPage } from './feedback-on-complaint.page';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {
    path: '',
    component: FeedbackOnComplaintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    ReactiveFormsModule,
    RouterModule.forChild(routes),NgbModule
  ],
  declarations: [FeedbackOnComplaintPage]
})
export class FeedbackOnComplaintPageModule {}
