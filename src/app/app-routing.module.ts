import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',redirectTo:'home', pathMatch:'full' },

  { path: 'home', loadChildren: './main-page/main-page.module#MainPageModule' },

  { path: '**', redirectTo:'home',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
