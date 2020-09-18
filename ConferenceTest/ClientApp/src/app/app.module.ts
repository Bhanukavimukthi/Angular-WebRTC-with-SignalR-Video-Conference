import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';

import { UserNameComponent } from './user-name/user-name.component';
import { VideoBoardComponent } from './video-board/video-board.component';
import { LeaveConferenceComponent } from './leave-conference/leave-conference.component';
//import { SignalrService } from './signalr.service'

const appRoutes: Routes = [
  //{
  //  path: 'intro',
  //  component: AppIntroComponent,
  //},
  {
    path: 'rtc',
    component: UserNameComponent,
  },
  {
    path: '',
    redirectTo: '/rtc',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/rtc'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent,
    VideoBoardComponent,
    //LeaveConferenceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
