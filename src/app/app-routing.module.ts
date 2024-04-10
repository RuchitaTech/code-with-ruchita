import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './authentication/login/login.component';
import { SidebarNavComponent } from './secure/sidebar-nav/sidebar-nav.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'public/login', component: LoginComponent },
  { path: 'secure/home', component: SidebarNavComponent},
  { path: '**', component: AppComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
