import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'template',
    loadChildren: () => import("./reactive/reactive.module").then(m => m.ReactiveModule)
  },
  {
    path:'reactive',
    loadChildren: () => import("./template/template.module").then(m => m.TemplateModule)
  },
  {
    path: '404',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
