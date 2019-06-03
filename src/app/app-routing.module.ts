import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostAggregatorComponent } from './post-aggregator/post-aggregator.component';

const routes: Routes = [
  { path: 'post-aggregator', component: PostAggregatorComponent },
  { path: '',
    redirectTo: '/post-aggregator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
