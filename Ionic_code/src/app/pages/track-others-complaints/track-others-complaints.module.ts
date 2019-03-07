import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackOthersComplaintsPage } from './track-others-complaints.page';

const routes: Routes = [
  {
    path: '',
    component: TrackOthersComplaintsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackOthersComplaintsPage]
})
export class TrackOthersComplaintsPageModule {}
