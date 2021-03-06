import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { AuthModule } from './layouts/auth/auth.module';
import { WebAppComponent } from './layouts/web-app/web-app.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule)
    }],
    canActivate: [AuthGuard]
  },
  {
    path: "app",
    component: WebAppComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/web-app/web-app.module').then(m => m.WebAppModule)
    }],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
