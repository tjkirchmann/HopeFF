import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'leaderboard', loadChildren: './leaderboard/leaderboard.module#LeaderboardPageModule' },
    { path: 'play', loadChildren: './play/play.module#PlayPageModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }