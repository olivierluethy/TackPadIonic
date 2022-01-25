import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotizenPage } from './notizen.page';

const routes: Routes = [
  {
    path: '',
    component: NotizenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotizenPageRoutingModule {}
