import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )]
})
export class AppModule {}