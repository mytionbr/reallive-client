import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { AuthModule } from './layouts/auth/auth.module';

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
