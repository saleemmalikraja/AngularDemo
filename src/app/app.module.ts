import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatInput, MatInputModule, MatTableModule
} from '@angular/material';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { SecondPageService } from './second-page/second-page.service';


import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from 'src/app/fake-backend/fake-backend.service';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { EmployeeProfileService } from './third-page/employee-profile.service';
import { CustomCompComponent } from './custom-comp/custom-comp.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ParentComponent } from './parent/parent.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ObjservableTestComponent } from './objservable-test/objservable-test.component';
import { SubjectTestComponent } from './subject-test/subject-test.component';
import { ListSmartComponent } from './list-smart/list-smart.component';
import { HostBindingListenerComponent } from './host-binding-listener/host-binding-listener.component';

const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
  { path: 'custom-elements', component: CustomCompComponent },
  { path: 'c1-p', component: ParentComponent },
  { path: 'c2-p2', component: ParentTwoComponent },
  { path: 'observable', component: ObjservableTestComponent },
  { path: 'subject', component: SubjectTestComponent },
  { path: '', redirectTo: 'first-page', pathMatch: 'full' },
  { path: '**', redirectTo: 'first-page' }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    CustomCompComponent,
    ChildOneComponent,
    ParentComponent,
    ChildTwoComponent,
    ParentTwoComponent,
    ObjservableTestComponent,
    SubjectTestComponent,
    ListSmartComponent,
    HostBindingListenerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(FakeBackendService),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes , {useHash: true}),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [SecondPageService, EmployeeProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
