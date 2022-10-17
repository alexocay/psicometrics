import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WonderlicComponent } from './wonderlic/wonderlic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { QuizModule } from './components/quiz.module';
import { TermanMerrilComponent } from './terman-merril/terman-merril.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'wonderlic', component: WonderlicComponent },
{path: 'termanMerril', component: TermanMerrilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WonderlicComponent,
    HomeComponent,
    TermanMerrilComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes), 
    QuizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
