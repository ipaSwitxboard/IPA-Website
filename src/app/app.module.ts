import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { PartnersComponent } from './Layouts/partners/partners.component';
import { MapComponent } from './Shared/map/map.component';
import { MapTunisiaComponent } from './Shared/map-tunisia/map-tunisia.component';
import { MapUsaComponent } from './Shared/map-usa/map-usa.component';
import { MapAustriaComponent } from './Shared/map-austria/map-austria.component';
import { GeneralContactComponent } from './Pages/general-contact/general-contact.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ContactComponent } from './Forms/contact/contact.component';
import { LandingComponent } from './Pages/Country/landing/landing.component';
import { AboutUsComponent } from './Pages/Country/about-us/about-us.component';
import { UnusedComponent } from './Layouts/unused/unused.component';
import { LatestComponent } from './Layouts/latest/latest.component';
import { NewsComponent } from './Pages/Country/news/news.component';
import { SubscribeComponent } from './Layouts/subscribe/subscribe.component';
import { ArticleComponent } from './Pages/Country/article/article.component';
import { ProjectsComponent } from './Pages/Country/projects/projects.component';
import { ProjectComponent } from './Pages/Country/project/project.component';
import { NavBarMobileComponent } from './Shared/nav-bar-mobile/nav-bar-mobile.component';
import { TheLatestComponent } from './Layouts/the-latest/the-latest.component';
import { LogoComponent } from './Layouts/logo/logo.component';
import { TopNavComponent } from './Layouts/top-nav/top-nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsaComponent } from './Pages/usa/usa.component';
import { ConceptsComponent } from './Pages/concepts/concepts.component';
import { GetInvolvedComponent } from './Forms/get-involved/get-involved.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CountryPipe } from './services/country.pipe';
import { DatePipe } from './services/date.pipe';
import { MapBoxComponent } from './Layouts/map-box/map-box.component';
import { NetworkComponent } from './Pages/network/network.component';
import { LoginComponent } from './Admin/login/login.component';
import { CarouselComponent } from './Layouts/carousel/carousel.component';
import { AddArticleComponent } from './Admin/add-article/add-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    PartnersComponent,
    MapComponent,
    MapTunisiaComponent,
    MapUsaComponent,
    MapAustriaComponent,
    GeneralContactComponent,
    ContactComponent,
    LandingComponent,
    AboutUsComponent,
    UnusedComponent,
    LatestComponent,
    NewsComponent,
    SubscribeComponent,
    ArticleComponent,
    ProjectsComponent,
    ProjectComponent,
    NavBarMobileComponent,
    TheLatestComponent,
    LogoComponent,
    TopNavComponent,
    UsaComponent,
    ConceptsComponent,
    GetInvolvedComponent,
    CountryPipe,
    DatePipe,
    MapBoxComponent,
    NetworkComponent,
    LoginComponent,
    CarouselComponent,
    AddArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
