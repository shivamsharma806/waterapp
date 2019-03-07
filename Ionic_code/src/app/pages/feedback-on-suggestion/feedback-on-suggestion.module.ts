import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeedbackOnSuggestionPage } from './feedback-on-suggestion.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackOnSuggestionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedbackOnSuggestionPage]
})
export class FeedbackOnSuggestionPageModule {}
