import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WonderlicComponent } from './wonderlic/wonderlic.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
{ path: 'wonderlic', component: WonderlicComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WonderlicComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
