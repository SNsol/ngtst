import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIModule } from './ui/ui.module';
import { HeroModule } from './hero/hero.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ReverseStrPipe } from './pipes/reverse-str.pipe';
import { GooglePlacesDirective } from './directives/google-places.directive';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ReverseStrPipe,
    GooglePlacesDirective
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    UIModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
