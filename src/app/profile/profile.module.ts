import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { RouterModule,Routes } from '@angular/router';
const routes:Routes =[
  {path:'',redirectTo:'view-profile',pathMatch:'full'},
  {path:'view-profile',component:ViewProfileComponent},
  {path:'edit-profile',component:EditProfileComponent},
  {path:'myorders',component:MyordersComponent}

]


@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    MyordersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
