import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'new-item', loadChildren: './pages/new-item/new-item.module#NewItemPageModule' },
  { path: 'update-item', loadChildren: './pages/update-item/update-item.module#UpdateItemPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },   
  { path: 'track-complaint', loadChildren: './pages/track-complaint/track-complaint.module#TrackComplaintPageModule' },
  { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'contact-us', loadChildren: './pages/contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'user-details', loadChildren: './pages/user-details/user-details.module#UserDetailsPageModule' },
  { path: 'feedback', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule' },
  { path: 'track-own-complaints', loadChildren: './pages/track-own-complaints/track-own-complaints.module#TrackOwnComplaintsPageModule' },
  { path: 'track-others-complaints', loadChildren: './pages/track-others-complaints/track-others-complaints.module#TrackOthersComplaintsPageModule' },
  { path: 'feedback-on-complaint', loadChildren: './pages/feedback-on-complaint/feedback-on-complaint.module#FeedbackOnComplaintPageModule' },
  { path: 'feedback-on-suggestion', loadChildren: './pages/feedback-on-suggestion/feedback-on-suggestion.module#FeedbackOnSuggestionPageModule' },
  { path: 'reminder', loadChildren: './pages/reminder/reminder.module#ReminderPageModule' },
  { path: 'grievence', loadChildren: './pages/grievence/grievence.module#GrievencePageModule' },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
