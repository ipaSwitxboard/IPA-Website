import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Pages/home/home.component";
import {LandingComponent} from "./Pages/Country/landing/landing.component";
import {AboutUsComponent} from "./Pages/Country/about-us/about-us.component";
import {NewsComponent} from "./Pages/Country/news/news.component";
import {ArticleComponent} from "./Pages/Country/article/article.component";
import {ProjectsComponent} from "./Pages/Country/projects/projects.component";
import {ProjectComponent} from "./Pages/Country/project/project.component";
import {UsaComponent} from "./Pages/usa/usa.component";
import {ConceptsComponent} from "./Pages/concepts/concepts.component";
import {GetInvolvedComponent} from "./Forms/get-involved/get-involved.component";
import {MapBoxComponent} from "./Layouts/map-box/map-box.component";
import {NetworkComponent} from "./Pages/network/network.component";
import {LoginComponent} from "./Admin/login/login.component";
import {AddArticleComponent} from "./Admin/add-article/add-article.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tunisia',
    children: [
      {
        path: 'family',
        component: LandingComponent
      },
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path: 'news',
        children:[
          {
            path: '',
            component: NewsComponent,
          }
        ]
      },
      {
        path: 'projects',
        children:[
          {
            path: '',
            component: ProjectsComponent,
          },
          {
            path: 'project',
            component: ProjectComponent
          }
        ]
      },
    ]
  },
  {
    path: 'Austria',
    children: [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path: 'news',
        children:[
          {
            path: '',
            component: NewsComponent,
          }
        ]
      },
      {
        path: 'projects',
        children:[
          {
            path: '',
            component: ProjectsComponent,
          },
          {
            path: 'project',
            component: ProjectComponent
          }
        ]
      },
    ]
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'USA',
    component: UsaComponent,
  },
  {
    path: 'concepts',
    component: ConceptsComponent
  },
  {
    path: 'get_involved',
    component: GetInvolvedComponent
  },
  {
    path: 'network',
    component: NetworkComponent
  },
  {
    path: 'admin',
    component: LoginComponent,
  },
  {
    path: 'add_article',
    component: AddArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
