import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { EducationComponent } from "./pages/education/education.component";
import { HomeComponent } from "./pages/home/home.component";
import { MakingComponent } from "./pages/making/making.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { SkillsComponent } from "./pages/skills/skills.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'education', component: EducationComponent },
    { path: 'making', component: MakingComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}