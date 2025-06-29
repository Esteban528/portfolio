import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { BlogComponent } from './blog/blog.component';
import { ViewPostComponent } from './blog/view-post/view-post.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './home/projects/projects.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'project/:id', component:ProjectViewComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/post/:id', component:ViewPostComponent},
];
