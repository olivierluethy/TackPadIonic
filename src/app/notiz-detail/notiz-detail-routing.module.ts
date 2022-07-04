import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotizDetailPage } from './notiz-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NotizDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotizDetailPageRoutingModule {}
