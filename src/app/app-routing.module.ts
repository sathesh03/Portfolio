import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path: 'navbar',component:NavbarComponent},
  {path:'about',component:AboutComponent},
  {path:'skills',component:SkillsComponent},
  {path:'contact',component:ContactComponent},
  {path:'education',component:EducationComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'project',component:ProjectComponent},
  {path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
