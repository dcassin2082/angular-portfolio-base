import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeetCodeComponent } from './leet-code/leet-code.component';
import { ArticlesComponent } from './articles/articles.component';
import { LandingComponent } from './landing/landing.component';
import { ExperienceComponent } from './experience/experience.component';
import { LeetCodeQuestionsComponent } from './leet-code-questions/leet-code-questions.component';
import { ResumeComponent } from './resume/resume.component';
import { Articles2Component } from './articles2/articles2.component';
import { SalesTrackerComponent } from './sales-tracker/sales-tracker.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  { path: 'experience', component: ResumeComponent },
  { path: 'leet-code', component: LeetCodeQuestionsComponent },
  { path: 'articles', component: Articles2Component },
  { path: 'sales-tracker', component: SalesTrackerComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
      useHash: true,
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
