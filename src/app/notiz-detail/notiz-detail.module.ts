import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotizDetailPageRoutingModule } from './notiz-detail-routing.module';

import { NotizDetailPage } from './notiz-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotizDetailPageRoutingModule
  ],
  declarations: [NotizDetailPage]
})
export class NotizDetailPageModule {}
