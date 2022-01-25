import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotizenPageRoutingModule } from './notizen-routing.module';

import { NotizenPage } from './notizen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotizenPageRoutingModule
  ],
  declarations: [NotizenPage]
})
export class NotizenPageModule {}
